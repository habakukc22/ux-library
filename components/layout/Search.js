import { useContext, useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { SearchContext } from "../../context/context";
import styles from "./Search.module.css";

function Search() {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const { searchWasClear, dispatch } = useContext(SearchContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (searchWasClear) {
      setInputValue("");
    }
  }, [searchWasClear]);

  const changeHandler = (event) => {
    setInputValue(event.target.value);

    dispatch({ type: "FILTER", payload: event.target.value.trim() });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: "FILTER", payload: inputValue.trim() });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <AiOutlineSearch className={styles.searchicon} />
      <input
        id="search-input"
        onChange={changeHandler}
        value={inputValue}
        ref={inputRef}
      />
    </form>
  );
}

export default Search;
