import { WorldSettings } from './../Types/Settings';
import { getHeroNickname, getWorldName } from '../Engine';
import { HeroSettings, Settings } from '../Types/Settings';

export const initWorldSettings = () => {
  const initSettings = getInitSettings();
  localStorage.setItem('SEBA_LOOT', JSON.stringify(initSettings));
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

  return settings;
};
