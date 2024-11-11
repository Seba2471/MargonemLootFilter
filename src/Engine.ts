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

export const saveHotWidgetToStorage = (
  t: string,
  e: number,
  i: string,
  n: unknown,
) => Engine.widgetManager.saveHotWidgetToStorage(t, e, i, n);

export const sendData = (
  p: unknown,
  o: string,
  r: number,
  t: string,
  n: boolean,
) =>
  Engine.serverStorage.sendData(p, () => {
    Engine.widgetManager.afterSaveWidgetInServerStorage(o, r, t, n);
  });

export const addDefaultWidget = (
  n: string,
  i: number,
  pos: string,
  txt: string,
  type: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  clb: Function,
) => Engine.widgetManager.addKeyToDefaultWidgetSet(n, i, pos, txt, type, clb);
export const getWindowsData = () => Engine.windowsData.name;
export const setWindowsData = (newWindowsData: unknown) =>
  (Engine.windowsData.name = newWindowsData);

export const addWindowToManager = (
  name: string,
  title: string,

  content: HTMLDivElement,
  onClose: () => void,
) => {
  Engine.windowManager.add({
    content: content,
    title: title,
    nameWindow: name,
    widget: name,
    type: Engine.windowsData.type.TRANSPARENT,
    manageOpacity: 3,
    managePosition: {
      x: 251,
      y: 60,
    },
    manageShow: 0,
    addClass: name,
    onclose: onClose,
  });

  const windows = getWindowsList();
  windows[name][0].addToAlertLayer();
  windows[name][0].hide();
  windows[name][0].addClass('loot-filter-window');
};

export const getWindowsList = () => Engine.windowManager.getList();

export const getWindowByName = (name: string) =>
  Engine.windowManager.getWndByLinkedWidgetName(name);
