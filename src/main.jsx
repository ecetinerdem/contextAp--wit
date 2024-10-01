import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import SettingsContextProvider from './contexts/SettingsContext.jsx';
import UserContextProvider from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </UserContextProvider>
);
