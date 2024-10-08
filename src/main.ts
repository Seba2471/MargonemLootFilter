import {
  getCurrentLoots,
  getItemById,
  lootWindowIsShow,
  setItemsState,
} from './Engine';
import { sleep } from './Utils';

export const main = async () => {
  while (true) {
    if (lootWindowIsShow()) {
      const loots = getCurrentLoots();
      const lootsIds = Object.keys(loots);
      lootsIds.forEach((item) => {
        const itemType = getItemById(item).getItemType();
        if (itemType === 't-norm') {
          loots[item] = 0;
        }
      });
      setItemsState(loots);
    }
    await sleep(1000);
  }
};
