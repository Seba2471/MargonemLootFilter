import { HeroSettings } from './../Types/Settings';
import { changeWindowState } from '../Utils/display';
import {
  getCurrentHeroSettings,
  getInitHeroSettings,
  initSettings,
} from '../Utils/localStorage';
import {
  addWindow,
  createRowWithCheckBox,
  createRowWithHeader,
} from '../Utils/window';

const createLootFilterContent = (
  heroSettings: HeroSettings,
): HTMLDivElement => {
  const content: HTMLDivElement = document.createElement('div');
  content.classList.add('loot-filter');

  content.appendChild(createRowWithHeader('Automatyczne akceptowanie:'));
  content.appendChild(
    createRowWithCheckBox(
      'W pojedynkę:',
      heroSettings.heroSettings.solo,
      'solo',
    ),
  );
  content.appendChild(
    createRowWithCheckBox(
      'W grupie:',
      heroSettings.heroSettings.groupe,
      'groupe',
    ),
  );
  content.appendChild(createRowWithHeader('Nie zamykam okna łupu jeśli:'));
  content.appendChild(
    createRowWithCheckBox(
      'Wypadł heroik:',
      heroSettings.heroSettings.heroic,
      'heroic',
    ),
  );
  content.appendChild(
    createRowWithCheckBox(
      'Wypadła legenda:',
      heroSettings.heroSettings.legendary,
      'legendary',
    ),
  );

  return content;
};

export const addLootFilterWindow = () => {
  let currentHeroSettings = getCurrentHeroSettings();

  if (!currentHeroSettings) {
    initSettings();
    currentHeroSettings = getInitHeroSettings();
  }

  const content = createLootFilterContent(currentHeroSettings);

  const onClose = () =>
    changeWindowState('SEBA_LOOT', '.widget-lootfilter-by-seba');
  addWindow('SEBA_LOOT', 'Rozszerzony loot filter', content, onClose);
};
