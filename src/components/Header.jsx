import { useContext } from 'react';
import { SettingsContext } from '../contexts/SettingsContext';
import { UserContext } from '../contexts/UserContext';

export default function Header() {
  const { isLoggedIn, lang, darkMode, toggleDarkMode } =
    useContext(SettingsContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <header>
      <img src="" />
      <nav>
        <a href="">Ana Sayfa</a>
        <a href="">Programlar</a>
        <a href="">Hakkımızda</a>
        <a href="">İletişim</a>
      </nav>
      <div>
        {isLoggedIn() ? (
          user.name
        ) : (
          <button onClick={() => setUser({ name: 'Emre Şahiner' })}>
            Log in
          </button>
        )}
      </div>
      <div onClick={() => toggleDarkMode()}>Mode: {darkMode}</div>
      <div>{lang}</div>
    </header>
  );
}
