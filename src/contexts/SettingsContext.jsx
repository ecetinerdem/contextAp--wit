import { createContext, useContext, useState } from 'react';
import { UserContext } from './UserContext';

export const SettingsContext = createContext();

export default function SettingsContextProvider(props) {
  const { children } = props;
  const { user } = useContext(UserContext);

  const [darkMode, setDarkMode] = useState('light');
  const [lang, setLang] = useState('tr');

  function toggleDarkMode() {
    setDarkMode(darkMode === 'light' ? 'dark' : 'light');
  }

  function isLoggedIn() {
    return user !== null;
  }

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        lang,
        setLang,
        isLoggedIn,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
