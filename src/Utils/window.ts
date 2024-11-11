import { addWindowToManager, getWindowsData, setWindowsData } from '../Engine';
import { updateHeroSettings } from './localStorage';

export const addWindow = (
  windowName: string,
  title: string,
  content: HTMLDivElement,
  onClose: () => void,
) => {
  const windowsData = getWindowsData();
  const newWindowsData = { ...windowsData, [`${windowName}`]: windowName };
  setWindowsData(newWindowsData);
  addWindowToManager(windowName, title, content, onClose);
};

export const createRowWithCheckBox = (
  title: string,
  state: boolean,
  id: string,
) => {
  const row = document.createElement('div');
  row.classList.add('one-checkbox');
  row.classList.add('row');
  row.classList.add('do-action-cursor');
  const checkbox = document.createElement('div');
  checkbox.classList.add('checkbox');
  checkbox.id = id;
  if (state) {
    checkbox.classList.add('active');
  }
  row.appendChild(checkbox);
  const label = document.createElement('span');
  label.classList.add('label');
  label.innerHTML = title;
  row.appendChild(label);
  row.addEventListener('click', () => {
    const isActive = checkbox.classList.contains('active');
    if (isActive) {
      checkbox.classList.remove('active');
      updateHeroSettings({ [id]: false });
    } else {
      checkbox.classList.add('active');
      updateHeroSettings({ [id]: true });
    }
  });
  return row;
};

export const createRowWithHeader = (header: string) => {
  const row = document.createElement('div');
  row.classList.add('one-checkbox');
  row.classList.add('row');
  row.classList.add('do-action-cursor');
  const label = document.createElement('span');
  label.classList.add('label');
  label.innerHTML = header;
  row.appendChild(label);
  return row;
};
