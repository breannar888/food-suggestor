import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export default function MealCard({ meal }) {
  return (
    <Card sx={{ display: "flex", height: 200, m: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "0 auto", width: 150, margin: "auto" }}>
          <Typography component="div" variant="h6">
            {meal.strMeal}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: "100%" }}
        image={meal.strMealThumb}
        alt={meal.strMeal}
      />
    </Card>
  );
}
