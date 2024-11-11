import { addStyles } from './addStyles';
import { customWindow } from './Types/Window';
import { waitFor } from './Utils';
import { main } from './main';
import { loadAddons } from './addons';

declare const window: customWindow;

const isNewInterface =
  typeof window.Engine !== 'undefined' &&
  typeof window.Engine.hero !== 'undefined';

if (isNewInterface) {
  addStyles();
  waitFor(
    function () {
      // czekaj na pelne zaladowanie gry
      return window.Engine && window.Engine.allInit;
    },
    async function () {
      await loadAddons();
      await main();
    },
  );
}
