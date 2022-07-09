import React from "react";
import { useState } from "react";
import Location from "./Location";
import SearchResult from "./SearchResult";

const Search = () => {
  const urlDeafult = Math.floor(Math.random() * 126) + 1;

  const [urlLocation, setUseUrlLocation] = useState(`https://rickandmortyapi.com/api/location/${urlDeafult}`);
  const [search, setSearch] = useState("");

  const searchLocation = (url) => {
        setSearch("")
        setUseUrlLocation(url)
  }



  return (
    <div className="header">
      <img src="src/images/image3.svg" alt="" className="img-principal" />
      <img src="src/images/image2.svg" alt="" className="img-text" />
      <div className="search">
        <input
          type="text"
          placeholder="Search location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        { search !== "" && (<SearchResult search={search} searchLocation={searchLocation} />) }
      </div>
        <Location url={urlLocation} />

    </div>
  );
};

export default Search;
