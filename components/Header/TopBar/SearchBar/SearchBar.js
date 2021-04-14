import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchBar.module.css";
import { useState } from "react";

let category = {
  ALL: "All",
};

const SearchBar = ({}) => {

  const [searchText,setSearchText] = useState("");

  const onSearch = (event) => {
      event.preventDefault();
      console.log(searchText);
  };
  
  const onChangeSearch = (event)=>{
      let searchValue = event.target.value;
      setSearchText(searchValue);
  }

  return (
    <div className={classes.SearchBar}>
      <div className={classes.Category}>
        <div className={classes.CategoryText}>{category.ALL}</div>
        <div className={classes.CategoryDrop}>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </div>
      <div className={classes.InputBar}>
        <input type="text" value={searchText} onChange={onChangeSearch}/>
      </div>
      <div className={classes.SearchBtn}>
        <button type="submit" onClick={onSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
