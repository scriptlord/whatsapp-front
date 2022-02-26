import React, { useState } from "react";
import search from "./profilepic/search.png";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FriendContextWrapper from "./context/FriendsContext";

const SearchTerm: React.FC<{ placeholder: any; data: any; setFilteredData: any; filteredData: any[]; inputValue: string; setInputValue: (value: string) => void; }> = ({
  placeholder,
  data,
  setFilteredData,
  filteredData,
  inputValue,
  setInputValue,
}) => {

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setInputValue(searchWord);
    const newFilter = data.filter((value: any) => {
      let x = value.fullName || value.group_name || value;
      return x.toLowerCase().includes(searchWord.toLowerCase());
    });

    //console.log(newFilter)

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <React.Fragment>
      <div className="searchBox">
        <div className="searchContainer">
          {/* <img src={search} className="searchIcon" alt="search" /> */}
          <div className="searchit">
            {filteredData.length === 0 ? (
              <img src={search} className="searchIcon" alt="search" />
            ) : (
              <CloseIcon id="clearBtn" />
            )}
          </div>
          <input
            type="text"
            value={inputValue}
            className="searchInput"
            placeholder={placeholder}
            onChange={handleFilter}
          />

        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchTerm;
