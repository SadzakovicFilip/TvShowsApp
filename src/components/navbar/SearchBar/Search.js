import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Search.css";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function Search({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState(``);

  const handleFilter = (event) => {
    setSearchWord(event.target.value.toLowerCase());
    const newFilter = data.filter((item) => {
      return item.name.toLowerCase().includes(searchWord);
    });

    {
      searchWord === `` ? setFilteredData([]) : setFilteredData(newFilter);
    }

    if (event.target.value == ``) {
      setFilteredData([]);
      setSearchWord("");
    }
  };

  const handleClick = () => {
    setFilteredData([]);
    setSearchWord(``);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          value={searchWord}
          className="input"
          type="text"
          placeholder="Search for the Show..."
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {searchWord.length == 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon className="clearButton" onClick={handleClick} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="searchResults">
          {filteredData.slice(0, 10).map((show) => {
            return (
              <Link
                className="dataItem"
                onClick={handleClick}
                to={`/shows/${show.id}`}
              >
                <p>{show.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
