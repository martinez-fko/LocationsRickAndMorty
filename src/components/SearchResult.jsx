import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchResult = ({ search, searchLocation }) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${search}`)
      .then((res) => setResult(res.data.results))
      .catch( e => setResult([ { id: "error" ,url : "" , name: "Location not found"} ]))
  }, [search]);

  console.log(result);

  return (
    <div className="searchResult">
      {result.map((item) => (
        <button key={item.id} onClick={() => searchLocation(item.url)}>{item.name}</button>
      ))}
    </div>
  );
};

export default SearchResult;
