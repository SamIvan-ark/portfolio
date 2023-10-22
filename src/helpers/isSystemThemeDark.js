const isSystemThemeDark = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }
  return false;
};

export default isSystemThemeDark;