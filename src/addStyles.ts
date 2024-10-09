export const addStyles = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://missclick.net.pl/style.css';
  document.head.appendChild(link);
};
