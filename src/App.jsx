import './App.css';

function App() {
  return (
    <>
      <div>
        {/* <p>hello world</p> */}
        {/* utilizzo il componente Text, lo richiamo come se fosse un html element */}
        <Text message={'componente 1'} />
        {/* posso utilizzare il componente quante volte voglio, è un'altra istanza del componente */}
        <Text message={'componente 2'} />
      </div>
      <div>
        <p>hello world 2</p>
      </div>
    </>
  );
}

// creo un altro componente e lo utilizzo nell'altro
// per passare info al componente dall'esterno utilizzo le props
// le props vengono passate in un oggetto come argomento della funzione
function Text({ message }) {
  return (
    <>
      {/* quello che è codice js viene inserito tra graffe */}
      <p>Sono il message: {message}</p>
    </>
  );
}

export default App;
