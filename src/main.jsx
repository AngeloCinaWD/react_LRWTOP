import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import App from './App.jsx';

// questo file è il file di bootstrap dell'app
// seleziona l'elemento #root nell'index.html e vi renderizza l'app, passandogli il componente App.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter acts like a context */}
    {/* wrappa l'intera app e consente di utilizzare globalmente slash routes */}
    <BrowserRouter>
      {/* app fa parte della children prop di BrowserRouter perchè è nel suo tag  */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
