import React from "react";
import Table from "./Table";

function SearchBar(props) {
  return (
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Filter Employees" />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
  );
}

export default SearchBar;