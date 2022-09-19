import React from "react";
import Box from "./Box";
import boxes from "./boxes";
import "./App.css";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  const squareElements = squares.map((square) => (
    <Box id={square.id} toggle={toggle} key={square.id} on={square.on} />
  ));

  return <main>{squareElements}</main>;
}

export default App;
