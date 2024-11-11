import {
  getCurrentLoots,
  getItemById,
  lootWindowIsShow,
  setItemsState,
} from '../Engine';
import { initWorldSettings } from '../Utils/localStorage';

export const lootFilterLogic = () => {
  const lootFilterSettings = localStorage.getItem('SEBA_LOOT');

  if (lootFilterSettings == undefined) {
    initWorldSettings();
  }

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
};
