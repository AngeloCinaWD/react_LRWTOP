import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// per utilizzare il router dobbiamo importare BrowserRouter
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// questo file è il file di bootstrap dell'app
// seleziona l'elemento #root nell'index.html e vi renderizza l'app, passandogli il componente App.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* per far funzionare il router dobbiamo wrappare questo componente */}
    {/* il BrowserRouter component ci dà la capacità di renderizzare a schermo quello che chiamiamo con una rotta */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
