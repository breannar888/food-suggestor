import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { getFilteredData } from "../../utils/ApiUtility";
import Select from "@mui/material/Select";

export default function StyledDropdown({
  mealList,
  resource,
  label,
  setMeals,
}) {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
    getFilteredData(resource, e.target.value).then((res) => {
      setMeals(res.data);
    });
  };

  let propName = "str" + label;

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="category-label-id">{label}</InputLabel>
      <Select
        labelId="category-label"
        id="category-ids"
        value={data}
        label={label}
        onChange={handleChange}
      >
        {mealList.map((meal, id) => {
          return (
            <MenuItem value={meal[propName]} key={id}>
              {meal[propName]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
