import React, { useState } from "react";
import Pixel from "./Pixel";
import ColorPicker from "./ColorPicker";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";


const GET_PIXELS = gql`
  subscription GetPixels {
    pixels(order_by: { id: asc }) {
      color
      id
    }
  }
`;

function App() {
  const { loading, error, data } = useSubscription(GET_PIXELS);
  const [color, changeColor] = useState("white");
  if (loading) {
    return <div>loading ... just wait</div>;
  }
  return (
    <div className="content">
      <div className="logo">Draw</div>
      <p>Pick a Color</p>
      <ColorPicker changeColor={changeColor} />
      <p>Click a Pixel</p>
      <div className="container">
        {data.pixels.map((pixel, idx) => (
          <Pixel
            color={pixel.color}
            id={pixel.id}
            key={pixel.id}
            newColor={color}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
