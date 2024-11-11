import { lootFilterLogic } from './LootFilter/logic';
import { sleep } from './Utils';

export const main = async () => {
  while (true) {
    lootFilterLogic();
    await sleep(300);
  }
};
