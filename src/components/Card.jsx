import React, { useState } from 'react';
import Pagination from './Pagination';
import ResidentInfo from './ResidentInfo';

//Componente que es el contenedor de las card y que muestra la info de la location
const Card = ({ result, currentPage, changePage }) => {
  const lastIndexNumber = currentPage * 4;
  const firstIndexNumber = lastIndexNumber - 4;
  const itemsPage = result.residents?.slice(firstIndexNumber, lastIndexNumber);
  const totalPage = Math.ceil(result.residents?.length / 4);

  return (
    <main className='container-location'>
      <div className='titleBox'>
        <h2>{result?.name}</h2>
        <h3 className='count'>
          Total Residents: <span>{result?.residents?.length}</span>
        </h3>
        <h3>
          Dimsension: <span> {result?.dimension}</span>
        </h3>
        <h3>
          Type: <span> {result?.type} </span>
        </h3>
      </div>
      <div className='container-card'>
        {result?.residents?.length === 0 ? (
          <div className='card'>
            <h1>There are no residents in this location</h1>
          </div>
        ) : (
          itemsPage?.map((resident) => (
            <ResidentInfo key={resident} url={resident} />
          ))
        )}
      </div>
      {result?.residents?.length > 0 && (
        <Pagination
          changePage={changePage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      )}
    </main>
  );
};

export default Card;
