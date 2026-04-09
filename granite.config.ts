import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'dragon', // 앱인토스 콘솔에서 설정한 앱 이름
  brand: {
    displayName: 'dragon', // 화면에 노출될 앱의 이름
    primaryColor: '#3182F6', // 기본 색상
    icon: '', // 콘솔에서 업로드한 이미지의 URL (지금은 비워둡니다)
  },
  web: {
    host: 'localhost', 
    port: 5173,
    commands: {
      dev: 'vite --host', // 모바일 실기기 디버깅을 위해 --host 추가
      build: 'vite build',
    },
  },
  permissions: [],
  webViewProps: {
    type: 'game' // 게임 웹뷰임을 명시
  }
});
