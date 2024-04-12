import React from "react";
import Button from "@mui/material/Button";

export default function StyledButton({ text, onClickMethod }) {
  return (
    <Button variant="contained" onClick={onClickMethod}>
      {text}
    </Button>
  );
}
