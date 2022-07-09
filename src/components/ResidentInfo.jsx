import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ResidentInfo = (urlResident) => {
    const [ resident, setResident ]  = useState({});

    useEffect(() => {
        axios.get(urlResident.urlResident)
        .then(res => setResident(res.data))
    }, []);

    

    return (
        <div className='card'>
            <img src={resident.image} alt="photo" />
            <div className="cardInfo">
                <h2>{resident.name}</h2>
                <div className='itemInfo'>
                    <p> <strong>Estatus</strong></p>
                    <p>{resident.status}</p>
                </div>
                <div className="iteminfo">
                    <p> <strong>Origin:</strong></p>
                    <p>{resident.origin?.name}</p>
                </div>
                <div className="itemInfo">
                    <p> <strong>Episodes where apper:</strong></p>
                    <p>{resident.episode?.length}</p>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;