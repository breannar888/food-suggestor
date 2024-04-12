import React from "react";
import Button from "@mui/material/Button";

export default function StyledButton({ text, onClickMethod }) {
  return (
    <Button
      sx={{
        m: 1,
        bgcolor: "#a2cf6e",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#618833",
          color: "#fff",
        },
      }}
      aria-label="previous"
      variant="contained"
      onClick={onClickMethod}
    >
      {text}
    </Button>
  );
}
