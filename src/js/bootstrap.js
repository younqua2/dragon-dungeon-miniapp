import { Init } from './game/Init.js';
import { loadData } from './file/DataManager.js';

const initApp = async () => {
      document.addEventListener('contextmenu', event => event.preventDefault());
      document.addEventListener('dragstart', event => event.preventDefault());
      
      const resizeScreen = () => {
          const root = document.getElementById('screen-root');
          const scale = Math.min(window.innerWidth / 1080, window.innerHeight / 1920);
          root.style.transform = `scale(${scale})`;
      };
      window.addEventListener('resize', resizeScreen);
      resizeScreen();

      console.log("[Toss SDK] 로그인 식별 완료...");
      let userId = "guest";
      const data = await loadData(userId);
      new Init(data);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

