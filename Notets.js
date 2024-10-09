const p2 = {
  hotWidget_pc: {
    'lootfilter-by-seba': [6, 'bottom-left'],
  },
};
const widgetData = Engine.widgetsData.name;
const newWidgetData = {
  ...widgetData,
  'lootfilter-by-seba': 'attack-near-mob',
};
Engine.widgetsData.name = newWidgetData;
Engine.serverStorage.sendData(p2, () => {
  Engine.widgetManager.afterSaveWidgetInServerStorage(
    'lootfilter-by-seba',
    6,
    'bottom-left',
    false,
  );
});

this.addKeyToDefaultWidgetSet = function (e, i, n, a, s, r) {
  t[e] = {
    keyName: e,
    index: i,
    pos: n,
    txt: a,
    type: s,
    clb: r,
    addon: !0,
  };
};

const windowsData = Engine.windowsData.name;
const newWindowsData = { ...windowsData, TESTOWY: 'testowy' };
Engine.windowsData.name = newWindowsData;
Engine.windowManager.add({
  content: 'dsfsfsfs',
  title: 'TESTOWY',
  nameWindow: 'TESTOWY',
  widget: 'TESTOWY',
  type: Engine.windowsData.type.TRANSPARENT,
  manageOpacity: 3,
  managePosition: {
    x: 251,
    y: 60,
  },
  manageShow: !1,
  addClass: 'TESTOWY',
  onclose: () => {
    w();
  },
});
