import { useState, createContext } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

/*
1. stackblitz yeni proje oluştur.
2. contexts klasörü oluştur.
3. içinde UserContext.jsx dosyası oluştur


UserContext:
    user: state

SettingsContext:
    darkMode: state
    lang: state
    isLoggedIn: function -> returns true if user state is not null
    toggleDarkMode: function


Header Component:
    show dark mode -> onClick toggle DarkMode
    show lang
    if user logged in
        show user.name
        show login button -> onClick setUser
*/
