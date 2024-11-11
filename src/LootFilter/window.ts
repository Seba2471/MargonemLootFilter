import { changeWindowState } from '../Utils/display';
import {
  addWindow,
  createRowWithCheckBox,
  createRowWithHeader,
} from '../Utils/window';

export const addLootFilterWindow = () => {
  const content: HTMLDivElement = document.createElement('div');
  content.classList.add('loot-filter');
  content.appendChild(createRowWithHeader('Automatyczne akceptowanie:'));
  content.appendChild(createRowWithCheckBox('W pojedynkę:'));
  content.appendChild(createRowWithCheckBox('W grupie:'));
  content.appendChild(createRowWithHeader('Nie zamykam okna łupu jeśli:'));
  content.appendChild(createRowWithCheckBox('Wypadł heroik:'));
  content.appendChild(createRowWithCheckBox('Wypadła legenda:'));

  const onClose = () =>
    changeWindowState('SEBA_LOOT', '.widget-lootfilter-by-seba');
  addWindow('SEBA_LOOT', 'Rozszerzony loot filter', content, onClose);
};
