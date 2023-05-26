import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SearchContext } from "../../context/context";

export default function SortBox() {
  const [selectValue, setSelectValue] = useState("popularity");
  const { searchWasClear, dispatch } = useContext(SearchContext);

  useEffect(() => {
    if (searchWasClear) {
      setSelectValue("popularity");
      dispatch({ type: "SORT", payload: "popularity" });
    }
  }, [searchWasClear, dispatch]);

  let selectChangeHandler = (event) => {
    setSelectValue(event.target.value);
    dispatch({ type: "SORT", payload: event.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label="Sort"
          onChange={selectChangeHandler}
        >
          <MenuItem value={"popularity"}>Popularity</MenuItem>
          <MenuItem value={"comments"}>Comments</MenuItem>
          <MenuItem value={"created_at"}>Created at</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
