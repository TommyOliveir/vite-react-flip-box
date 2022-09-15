import React from "react";
import Box from "./Box";
import boxes from "./boxes";
import "./App.css";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }
  const squareElements = squares.map((square) => (
    <Box id={square.id} toggle={toggle} key={square.id} on={square.on} />
  ));

  return <main>{squareElements}</main>;
}

export default App;
