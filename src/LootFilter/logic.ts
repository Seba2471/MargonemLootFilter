import { playerInParty } from './../Engine';
import {
  acceptLoot,
  getCurrentLoots,
  getItemById,
  lootWindowIsShow,
} from '../Engine';
import {
  getCurrentHeroSettings,
  getInitHeroSettings,
  initSettings,
} from '../Utils/localStorage';
import { sleep } from '../Utils';

export const lootFilterLogic = async () => {
  let currentHeroSettings = getCurrentHeroSettings();
  if (currentHeroSettings === null) {
    initSettings();
    currentHeroSettings = getInitHeroSettings();
  }

  if (lootWindowIsShow()) {
    const loots = getCurrentLoots();
    const lootsIds = Object.keys(loots);
    let heroicLoot = false;
    let legendaryLoot = false;
    lootsIds.forEach((item) => {
      const itemType = getItemById(item).getItemType();
      if (itemType === 't-her') {
        heroicLoot = true;
      } else if (itemType === 't-leg') {
        legendaryLoot = true;
      }
    });

    const { solo, groupe, heroic, legendary } =
      currentHeroSettings.heroSettings;
    const inParty = playerInParty();

    if (
      ((solo && !inParty) || (groupe && inParty)) &&
      (!heroic || !heroicLoot) &&
      (!legendary || !legendaryLoot)
    ) {
      acceptLoot(lootsIds.length);
    } else {
      await sleep(15000);
    }
  }
  //   if (lootWindowIsShow()) {
  //     const loots = getCurrentLoots();
  //     const lootsIds = Object.keys(loots);
  //     lootsIds.forEach((item) => {
  //       const itemType = getItemById(item).getItemType();
  //       if (itemType === 't-norm') {
  //         loots[item] = 0;
  //       }
  //     });
  //     setItemsState(loots);
  //   }
};
