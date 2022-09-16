import React from 'react';

//Componente que muestra el total de paginas
const Pagination = ({ currentPage , changePage, totalPage}) => {

    return (
        <div className='pagination'>
            <button disabled={ currentPage === 1} onClick={() => changePage(currentPage - 1)}>Prev</button>
            <p>{currentPage} / {totalPage}</p>
            <button disabled={ currentPage === totalPage} onClick={() => changePage(currentPage + 1)}>Next</button>
        </div>
    );
};

export default Pagination;