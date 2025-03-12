import './App.css';

// un componente in react è una funzione js che ritorna codice jsx
// il nome di un componente inizia sempre con una lettera maiuscola
// il codice ritornato deve essere sempre contenuto in un parent html (one root element), ad esempio posso ritornare un <div><div/> con dentro altro codice, ma se volessi ritornare più elementi html dello stesso livello (ad esempio 2 div siblings) avrei un errore, per non averlo posso utilizzare un react fragment, cioè wrappo tutto tra <> codice </> (è un empty html tag)
function App() {
  return (
    <>
      <div>
        <p>hello world</p>
      </div>
      <div>
        <p>hello world 2</p>
      </div>
    </>
  );
}

export default App;
