import './css/App.css';
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

// importo il provider che voglio utilizzare
import { MovieProvider } from './contexts/MoviesContext';

function App() {
  return (
    <>
      <NavBar />
      {/* <div> */}
      {/* wrappo tutto col MovieProvider */}
      {/* lo state fornito dal provider è disponibile in Home, in Favorites ed anche nei componenti children di questi */}
      <MovieProvider>
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
      </MovieProvider>
      {/* </div> */}
    </>
  );
}

export default App;
