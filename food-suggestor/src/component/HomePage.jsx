import React, { useEffect, useState } from "react";
import { getListedData } from "../utils/ApiUtility";
import StyledDropdown from "./styled/StyledDropdown";
import MealCard from "./MealCard";
import Box from "@mui/material/Box";

export default function HomePage() {
  //replace multiple states with useReducer
  //initial state
  const [area, setArea] = useState();
  const [category, setCategory] = useState();
  const [ingredient, setIngredient] = useState();
  const [loading, setLoading] = useState(true);

  //updated when dropdown value is selected
  const [meals, setMeals] = useState();

  //load in initial values for dropdowns
  useEffect(() => {
    getListedData("c").then((res) => {
      setCategory(res.data);
    });
    getListedData("a").then((res) => {
      setArea(res.data);
    });
    getListedData("i").then((res) => {
      setIngredient(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <>
            <StyledDropdown
              mealList={category.meals}
              resource="c"
              label="Category"
              setMeals={setMeals}
            />
            <StyledDropdown
              mealList={area.meals}
              resource="a"
              label="Area"
              setMeals={setMeals}
            />
            <StyledDropdown
              mealList={ingredient.meals}
              resource="i"
              label="Ingredient"
              setMeals={setMeals}
            />
          </>
        )}
      </div>
      <Box>
        {meals == null ? (
          <div>No meals yet!</div>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            {meals.meals.map((meal, id) => {
              return <MealCard meal={meal} key={id} />;
            })}
          </Box>
        )}
      </Box>
    </div>
  );
}
