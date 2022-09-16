import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  //Ontebemos un numero ramdon
  const urlDeafult = Math.floor(Math.random() * 126) + 1;
  //Creamos nuestro endpoint con el numero Random
  const [urlLocation, setUseUrlLocation] = useState(
    `https://rickandmortyapi.com/api/location/${urlDeafult}`
  );
  //Creamos nuestro estado para guardar las locaciones 
  const [result, setResult] = useState([]);
  //Creamos nuestro estado para saber en que pagina nos encontramos
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (number) => {
    //Function que recibe el numero de pagína para cambiar el estado
    setCurrentPage(number);
    if (screen.width < 600) {
      //si nuestra pantalla es movil menos de 600px que haga scroll hacia arriba
      window.scroll({
        top: 100,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    //Ejecutamos solo cuando se inicia la APP o cuando el estado urlLocation cambia
    axios.get(urlLocation).then((res) => setResult(res.data));
  }, [urlLocation]);

  const changeLocation = (url) => {
    //Function que cambia las locaciones de acuerdo a la URL que le pasen y devuelve a la página uno.
    setUseUrlLocation(`https://rickandmortyapi.com/api/location/${url}`);
    setCurrentPage(1);
  };

  return (
    <div className='App'>
      <NavBar changeLocation={changeLocation} />
      <Card result={result} currentPage={currentPage} changePage={changePage} />
      <Footer />
    </div>
  );
}

export default App;
