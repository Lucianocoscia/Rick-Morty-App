import { useEffect, useState } from "react"; // importo los useEffect y useState
import NavBar from "./Components/Navbar/NavBar";
import Characters from "./Components/Characters/Characters";
import Pagination from "./Components/Pagination/Pagination";
import Footer from "./Components/Footer/Footer"

function App() {
  const [characters, setCharacters] = useState([]); // Declaro useState de Personajes
  const [info, setInfo] = useState({}); // Declaro un useState para la info, para luego utilizarla para pagination
  const initialUrl = "https://rickandmortyapi.com/api/character"; // Url de la appi

  // llamado de la api
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      }) // aca obtengo los datos 
      .catch((error) => console.log(error));
  };
  // funciones q pasamos luego como propiedades para Pagination
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };
  // controlamos el estadio de aparicion mediante el useEffect
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []); // el componente se renderiza por unica vez

  return (
    <>
      <NavBar brand="Rick And Morty App" /> 
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />

      </div>
      <Footer footer='Hecho por Luciano Coscia Developer'/>
    </>
  );
}

export default App;
