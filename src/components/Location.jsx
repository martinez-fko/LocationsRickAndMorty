import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const Location = ({ url }) => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setLocation(res.data));
  }, [url]);

  return (
    <>
      <div className="location">
        <h1>{location.name}</h1>
        <p>Type: {location.type}</p>
        <p>Dimension : {location.dimension}</p>
        <p>Population: {location.residents?.length}</p>
      </div>
      <div className="residentItem">
        {location.residents?.map((resident) => (
          <ResidentInfo key={resident} urlResident={resident} />
        ))}
      </div>
    </>
  );
};

export default Location;
