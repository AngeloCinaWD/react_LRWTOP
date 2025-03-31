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
