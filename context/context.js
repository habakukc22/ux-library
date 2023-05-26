import { createContext, useReducer } from "react";
import searchReducer from "./SearchReducer.js";

export const SearchContext = createContext({
  posts: [],
  filteredPosts: [],
  loading: false,
  searchWasClear: false,
  dispatch: () => {},
});

export const SearchContextProvider = (props) => {
  const initialState = {
    posts: [],
    filteredPosts: [],
    searchWasClear: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const usersContext = {
    ...state,
    dispatch,
  };

  return (
    <SearchContext.Provider value={usersContext}>
      {props.children}
    </SearchContext.Provider>
  );
};

// export default SearchContext;
