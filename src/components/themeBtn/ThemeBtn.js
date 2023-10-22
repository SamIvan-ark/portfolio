import { useEffect, useRef } from 'react';
import useLocalStorage from '../../helpers/useLocalStorage';
import sunIcon from '../../img/icons/sun.svg';
import moonIcon from '../../img/icons/moon.svg';
import isSystemThemeDark from '../../helpers/isSystemThemeDark';
import './style.css';

const ThemeBtn = () => {
  const btnRef = useRef();
  
  const [isDarkMode, toggleDarkMode] = useLocalStorage('isDarkMode', isSystemThemeDark());

  const toggleTheme = () => {
    toggleDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        const isNewThemeDark = e.matches ? true : false;
        toggleDarkMode(isNewThemeDark);
    });
  }, [toggleDarkMode]);

  const lightClasses = 'dark-mode-btn';
  const darkClasses = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button ref={btnRef} className={isDarkMode ? darkClasses : lightClasses} onClick={toggleTheme}>
      <img src={sunIcon} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moonIcon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
 
export default ThemeBtn;