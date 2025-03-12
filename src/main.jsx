import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// questo file è il file di bootstrap dell'app
// seleziona l'elemento #root nell'index.html e vi renderizza l'app, passandogli il componente App.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
