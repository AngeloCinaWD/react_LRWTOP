import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <div>
        {/* <p>hello world 2</p> */}
        {/* utilizzo il componente che ho creato */}
        {/* passo la prop movie che è un oggetto */}
        <MovieCard movie={{ title: 'titolo film' }}></MovieCard>
      </div>
    </>
  );
}

export default App;
