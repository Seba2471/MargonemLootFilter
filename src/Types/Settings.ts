export interface Settings {
  worldsSettings: WorldSettings[];
}

export interface WorldSettings {
  world: string;
  heroSettings: HeroSettings[];
}

export interface HeroSettings {
  nickName: string;
  heroSettings: {
    solo: boolean;
    groupe: boolean;
    heroic: boolean;
    legendary: boolean;
  };
}
