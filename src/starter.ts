import { customWindow } from './Types/Window';
import { waitFor } from './Utils';
import { main } from './main';
declare const window: customWindow;

const isNewInterface =
  typeof window.Engine !== 'undefined' &&
  typeof window.Engine.hero !== 'undefined';

if (isNewInterface) {
  waitFor(
    function () {
      // czekaj na pelne zaladowanie gry
      return window.Engine && window.Engine.allInit;
    },
    async function () {
      await main();
    },
  );
}
