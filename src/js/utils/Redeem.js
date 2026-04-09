const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const CH_LENGTH = 32;
const SIG_LENGTH = 8;
const CS_LENGTH = 2;
const DEFAULT_PLAYER_CODE_LENGTH = 32;
const PLAYER_CODE_CONTEXT = 'PLAYER_CODE_V1';

const FEATURES = Object.freeze({
	missingno: Object.freeze({
		id: 'missingno',
		codePrefix: 'MN',
		salt: 'REDEEM_SALT_MISSINGNO',
		bindToPlayerCode: true,
	}),
	gold25k: Object.freeze({
		id: 'gold25k',
		codePrefix: 'GD',
		salt: 'REDEEM_SALT_GOLD25K',
		bindToPlayerCode: false,
		staticCode: 'WELCOME_GIFT_25',
	}),
});

function bytesToBase32(bytes) {
	let bits = 0;
	let value = 0;
	let output = '';

	for (const byte of bytes) {
		value = (value << 8) | byte;
		bits += 8;

		while (bits >= 5) {
			output += BASE32_ALPHABET[(value >>> (bits - 5)) & 31];
			bits -= 5;
		}
	}

	if (bits > 0) {
		output += BASE32_ALPHABET[(value << (5 - bits)) & 31];
	}

	return output;
}

function toBytes(input) {
	return new TextEncoder().encode(input);
}

function isValidBase32(value) {
	return /^[A-Z2-7]+$/.test(value);
}

async function sha256(input) {
	const digest = await crypto.subtle.digest('SHA-256', toBytes(input));
	return new Uint8Array(digest);
}

async function hmacSha256(secret, input) {
	const key = await crypto.subtle.importKey(
		'raw',
		toBytes(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	);
	const signature = await crypto.subtle.sign('HMAC', key, toBytes(input));
	return new Uint8Array(signature);
}

function getFeatureConfig(featureId) {
	return FEATURES[featureId] ?? null;
}

function getFeatureIdByCodePrefix(codePrefix) {
	const normalizedPrefix = codePrefix.trim().toUpperCase();
	return Object.keys(FEATURES).find((featureId) => FEATURES[featureId].codePrefix === normalizedPrefix) ?? null;
}

function parseRedeemCode(redeemCode) {
	const normalized = redeemCode.trim().toUpperCase();
	const match = /^([A-Z]{2})-([A-Z2-7]{32})-([A-Z2-7]{8})-([A-Z2-7]{2})$/.exec(normalized);
	if (!match) {
		return null;
	}

	return {
		codePrefix: match[1],
		ch: match[2],
		sig: match[3],
		cs: match[4],
	};
}

export function resolveRedeemCodeFeature(redeemCodeInput) {
	const normalizedInput = redeemCodeInput.trim().toUpperCase();
	const staticFeatureId = Object.keys(FEATURES).find((featureId) => {
		const featureConfig = FEATURES[featureId];
		return typeof featureConfig.staticCode === 'string' && featureConfig.staticCode === normalizedInput;
	});
	if (staticFeatureId) {
		return { ok: true, featureId: staticFeatureId, parsed: null };
	}

	const parsed = parseRedeemCode(redeemCodeInput);
	if (!parsed) {
		return { ok: false, reason: 'invalid_format' };
	}

	const featureId = getFeatureIdByCodePrefix(parsed.codePrefix);
	if (!featureId) {
		return { ok: false, reason: 'unknown_feature' };
	}

	return { ok: true, featureId, parsed };
}

export function generatePlayerSecret(byteLength = 16) {
	const bytes = new Uint8Array(byteLength);
	crypto.getRandomValues(bytes);
	return bytesToBase32(bytes);
}

export function normalizePlayerCode(playerCodeInput) {
	const normalized = playerCodeInput.trim().toUpperCase().replace(/[\s-]/g, '');
	if (!normalized || !isValidBase32(normalized)) {
		return null;
	}
	return normalized;
}

async function buildComponents(featureConfig, sourceValue) {
	const sourceHashBytes = await sha256(`${featureConfig.id}|${sourceValue}`);
	const ch = bytesToBase32(sourceHashBytes).slice(0, CH_LENGTH);

	const signatureBytes = await hmacSha256(featureConfig.salt, `${featureConfig.id}|${ch}`);
	const sig = bytesToBase32(signatureBytes).slice(0, SIG_LENGTH);

	const checksumBytes = await sha256(`${featureConfig.codePrefix}|${ch}|${sig}`);
	const cs = bytesToBase32(checksumBytes).slice(0, CS_LENGTH);

	return { ch, sig, cs };
}

export async function generateRedeemCode(featureId, playerCodeInput) {
	const featureConfig = getFeatureConfig(featureId);
	if (!featureConfig) {
		return null;
	}
	if (typeof featureConfig.staticCode === 'string') {
		return featureConfig.staticCode;
	}

	const sourceValue = featureConfig.bindToPlayerCode
		? normalizePlayerCode(playerCodeInput)
		: featureConfig.id;
	if (!sourceValue) return null;
	const { ch, sig, cs } = await buildComponents(featureConfig, sourceValue);
	return `${featureConfig.codePrefix}-${ch}-${sig}-${cs}`;
}

export async function derivePlayerCode(playerSecret, length = DEFAULT_PLAYER_CODE_LENGTH) {
	if (typeof playerSecret !== 'string' || playerSecret.length === 0) {
		return null;
	}

	const playerCodeBytes = await hmacSha256(playerSecret, PLAYER_CODE_CONTEXT);
	return bytesToBase32(playerCodeBytes).slice(0, length);
}

export async function validateRedeemCode(featureId, playerCodeInput, redeemCodeInput) {
	const featureConfig = getFeatureConfig(featureId);
	if (!featureConfig) {
		return { ok: false, reason: 'unknown_feature' };
	}

	if (typeof featureConfig.staticCode === 'string') {
		const normalizedInput = redeemCodeInput.trim().toUpperCase();
		return { ok: normalizedInput === featureConfig.staticCode, reason: normalizedInput === featureConfig.staticCode ? undefined : 'invalid_code' };
	}

	const resolved = resolveRedeemCodeFeature(redeemCodeInput);
	if (!resolved.ok) {
		return { ok: false, reason: resolved.reason };
	}

	if (resolved.featureId !== featureId) {
		return { ok: false, reason: 'invalid_feature' };
	}

	const { parsed } = resolved;
	const sourceValue = featureConfig.bindToPlayerCode
		? normalizePlayerCode(playerCodeInput)
		: featureConfig.id;
	if (!sourceValue) {
		return { ok: false, reason: 'invalid_player_code' };
	}
	const expected = await buildComponents(featureConfig, sourceValue);

	if (parsed.ch !== expected.ch) {
		return { ok: false, reason: 'player_code_mismatch' };
	}

	if (parsed.sig !== expected.sig) {
		return { ok: false, reason: 'signature_mismatch' };
	}

	if (parsed.cs !== expected.cs) {
		return { ok: false, reason: 'checksum_mismatch' };
	}

	return { ok: true };
}

export function getRedeemFeatures() {
	return Object.keys(FEATURES);
}

export async function generateMissingNoRedeemCode(playerCodeInput) {
	return generateRedeemCode('missingno', playerCodeInput);
}

export async function validateMissingNoRedeemCode(playerCodeInput, redeemCodeInput) {
	return validateRedeemCode('missingno', playerCodeInput, redeemCodeInput);
}

export async function generateGold25kRedeemCode() {
	return generateRedeemCode('gold25k', null);
}

export function featureRequiresPlayerCode(featureId) {
	const featureConfig = getFeatureConfig(featureId);
	return Boolean(featureConfig?.bindToPlayerCode);
}
