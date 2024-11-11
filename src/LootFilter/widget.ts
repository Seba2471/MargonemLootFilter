import { addDefaultWidget, sendData } from '../Engine';
import { changeWindowState } from '../Utils/display';

export const addLootFilterWidget = async () => {
  addDefaultWidget(
    'lootfilter-by-seba',
    6,
    'bottom-left',
    'LootFilter-Seba',
    'green',
    () => changeWindowState('SEBA_LOOT', '.widget-lootfilter-by-seba'),
  );
  const p = {
    hotWidget_pc: {
      'lootfilter-by-seba': [5, 'bottom-left'],
    },
  };
  await sendData(p, 'lootfilter-by-seba', 5, 'bottom-left', false);
};
