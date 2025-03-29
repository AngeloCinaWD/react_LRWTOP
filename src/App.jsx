import './App.css';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
// importo Routes e Route per renderizzare i componenti secondo rotta nell'url
import { Route, Routes } from 'react-router-dom';

// creo una nuova folder pages in src
// ci creo 2 file .jsx, Home e Favorites
function App() {
  return (
    <>
      {/* <Home /> */}
      {/* qui metto la navbar in modo da averla in tutte le pagine */}
      <NavBar />
      <div>
        <main>
          <Routes>
            {/* le rotte le definsco qui, tramite Route component */}
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
