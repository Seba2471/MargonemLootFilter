import { WorldSettings, HeroSettings, Settings } from './../Types/Settings';
import { getHeroNickname, getWorldName } from '../Engine';

export const initSettings = () => {
  const settings = getSettings();
  const currentWorld = getWorldName();
  if (settings === null) {
    const initSettings = getInitSettings();
    setSettings('SEBA_LOOT', initSettings);
  } else {
    const currentWorldSettings = settings.worldsSettings.find(
      (x) => x.world === currentWorld,
    );
    if (currentWorldSettings === undefined) {
      const currentWorldInitSettings = getWorldInitSettings();
      const newSettings: Settings = {
        ...settings,
        worldsSettings: [...settings.worldsSettings, currentWorldInitSettings],
      };
      setSettings('SEBA_LOOT', newSettings);
    } else {
      const currentHeroNickname = getHeroNickname();
      const currentHeroSettings = currentWorldSettings.heroSettings.find(
        (x) => x.nickName == currentHeroNickname,
      );

      if (currentHeroSettings === undefined) {
        const initHeroSettings = getInitHeroSettings();
        const newWorldSettings: WorldSettings = {
          ...currentWorldSettings,
          heroSettings: [
            ...currentWorldSettings.heroSettings,
            initHeroSettings,
          ],
        };

        const newSettings: Settings = {
          ...settings,
          worldsSettings: settings.worldsSettings.map((ws) =>
            ws.world === currentWorld ? newWorldSettings : ws,
          ),
        };

        setSettings('SEBA_LOOT', newSettings);
      }
    }
  }
};

export const getWorldInitSettings = () => {
  const currentWorld = getWorldName();
  const heroInitSettings = getInitHeroSettings();
  const worldSettings: WorldSettings = {
    world: currentWorld,
    heroSettings: [heroInitSettings],
  };

  return worldSettings;
};

export const getInitHeroSettings = () => {
  const currentHero = getHeroNickname();
  const heroSettings: HeroSettings = {
    nickName: currentHero,
    heroSettings: {
      solo: false,
      groupe: false,
      heroic: false,
      legendary: false,
    },
  };

  return heroSettings;
};

export const getInitSettings = () => {
  const heroNickName = getHeroNickname() as string;
  const heroSettings: HeroSettings = {
    nickName: heroNickName,
    heroSettings: {
      solo: false,
      groupe: false,
      heroic: false,
      legendary: false,
    },
  };

  const worldName = getWorldName();

  const worldSettings: WorldSettings = {
    world: worldName,
    heroSettings: [heroSettings],
  };

  const settings: Settings = {
    worldsSettings: [worldSettings],
  };
  console.log(settings);
  return settings;
};

export const getSettings = () => {
  const settings: Settings = JSON.parse(
    localStorage.getItem('SEBA_LOOT') || 'null',
  );

  return settings;
};

export const getCurrentHeroSettings = () => {
  const settings = getSettings();
  const world = getWorldName();
  if (settings) {
    const worldSettings = settings.worldsSettings.find(
      (x) => x.world === world,
    );
    if (worldSettings) {
      const heroNickName = getHeroNickname();
      const heroSettings = worldSettings.heroSettings.find(
        (x) => x.nickName === heroNickName,
      );
      if (heroSettings) {
        return heroSettings;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const setSettings = (key: string, data: Settings) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const updateHeroSettings = (
  newHeroSettings: Partial<HeroSettings['heroSettings']>,
) => {
  const currentSettings = getSettings();
  const worldName = getWorldName();
  const heroNickname = getHeroNickname();
  if (currentSettings) {
    const worldIndex = currentSettings.worldsSettings.findIndex(
      (ws) => ws.world === worldName,
    );
    if (worldIndex !== -1) {
      const heroIndex = currentSettings.worldsSettings[
        worldIndex
      ].heroSettings.findIndex((hs) => hs.nickName === heroNickname);
      if (heroIndex !== -1) {
        currentSettings.worldsSettings[worldIndex].heroSettings[
          heroIndex
        ].heroSettings = {
          ...currentSettings.worldsSettings[worldIndex].heroSettings[heroIndex]
            .heroSettings,
          ...newHeroSettings,
        };
        setSettings('SEBA_LOOT', currentSettings);
      }
    }
  }
};
