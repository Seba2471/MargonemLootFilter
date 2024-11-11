import { getWindowByName } from '../Engine';

export const changeWindowState = (windowName: string, widgetClass: string) => {
  const widget = document.querySelector(widgetClass);
  if (widget) {
    const isOpen = widget.classList.contains('window-is-open');
    const window = getWindowByName(windowName);
    if (window) {
      if (isOpen) {
        widget.classList.remove('window-is-open');
        widget.classList.remove('is-active');
        window.hide();
      } else {
        widget.classList.add('window-is-open');
        widget.classList.add('is-active');
        window.show();
      }
    }
  }
};
