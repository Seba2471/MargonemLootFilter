import { addDefaultWidget, sendData } from './Engine';
export const widgets = async () => {
  addDefaultWidget(
    'lootfilter-by-seba',
    6,
    'bottom-left',
    'LootFilter-Seba',
    'green',
    () => console.log('TEST'),
  );
  const p = {
    hotWidget_pc: {
      'lootfilter-by-seba': [5, 'bottom-left'],
    },
  };
  await sendData(p, 'lootfilter-by-seba', 5, 'bottom-left', false);
};
