// per utilizzare un foglio di stile solo per un determinato componente lo devo importare
// per convenzione il foglio di stile ha lo stesso nome del componente jsx
// creo una cartella css in src e ci scarico dentro tutti i file css che mi serviranno per l'app
// rimuovo i file index.css e App.css creati con la creazione del progetto tramite vite
// import './App.css';
// importo il nuovo file di stile css
import './css/App.css';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <div>
        <main>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/favorites'
              element={<Favorites />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
