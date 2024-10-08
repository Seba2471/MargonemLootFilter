import { customWindow } from './Types/Window';

declare const window: customWindow;
const Engine = window.Engine;

export const canFight = () => Engine.battle.show;

export const getCurrentLoots = () => Engine.loots.statesOfLoot;

export const lootWindowIsShow = () => {
  return Engine.loots?.wnd?.isShow() || false;
};

export const getItemById = (id: string) => Engine.items.getItemById(id);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setItemsState = (items: any) =>
  Engine.loots.setStatesOfLoot(items);
