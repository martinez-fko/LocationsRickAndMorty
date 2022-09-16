import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Componente que muestra la imagen del Navbar y el input de busqueda
//Recibe la function changelocation para elegir otra location
const NavBar = ({ changeLocation }) => {
  
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${search}`)
      .then((res) => setResult(res.data.results))
      .catch((e) =>
        setResult([{ id: 'error', url: '', name: 'Location not found' }])
      );
  }, [search]);

  const clicSearch = (url) => {
    setResult([]);
    setSearch('');
    changeLocation(url);
  };

  return (
    <div className='navBar'>
      <div className='inputSearch'>
        <input
          type='text'
          value={search}
          placeholder='Search Location'
          onChange={(e) => setSearch(e.target.value)}
        />
        {result.length != 0 && search != '' && (
          <div className='search__result'>
            {result.map((location) => (
              <p key={location.id} onClick={() => clicSearch(location.id)}>
                {location.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
