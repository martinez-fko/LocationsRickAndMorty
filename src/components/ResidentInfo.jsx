import axios from 'axios';
import React, { useEffect, useState } from 'react';

//Componente que muestra los card con la informacion de los residentes
const ResidentInfo = ({ url }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  return (
    <div className='card'>
      <div className={`imgBx ${character.status}`}>
        <img src={character.image} alt='' />
      </div>
      <div className='contentInfo'>
        <h2>{character.name}</h2>
        <div className='status'>
          <span className={character.status}></span>
          <h3>{character.status}</h3>
        </div>
        <h3>
          <span>Specie: &nbsp;</span> {character.species}
        </h3>
        <h3>
          <span>Gender: &nbsp;</span> {character.gender}
        </h3>
        <h3>
          <span>Location: &nbsp;</span> {character.location?.name}
        </h3>
      </div>
    </div>
  );
};

export default ResidentInfo;
