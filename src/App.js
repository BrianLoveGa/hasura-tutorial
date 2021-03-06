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
    return (
      <div>
        loading ... just wait please it'll be drawing time soon ... this is a
        free back end
      </div>
    );
  } else {
    console.log(error);
  }
  return (
    <div>
      <h1 className="top"> Live Web Sockets Pixel Art _-_ BWL</h1>
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
      <div className="info">
        <h2>
          Other users anywhere accessing the site can click and update a color
          at any time!
        </h2>
        <h1>Pretty cool huh?</h1>
        <h2>Check back tomorrow to see if it has changed!</h2>
        <p>
          This is all thanks to web sockets providing a live link from this
          React front end to a free Hasura GraphQL engine and Postgres API for
          each of the squares hosted on Heroku. Give them a try at{" "}
          <a
            className="has"
            target="_blank"
            href="https://docs.hasura.io/1.0/graphql/manual/getting-started/heroku-simple.html"
            rel="noopener noreferrer"
          >
            HASURA FREE on HEROKU
          </a>{" "}
          . Big time thanks to them and the amazing instructional skills of{" "}
          <a
            className="ali"
            href="https://hasura.io/community/hasura-realtime-graphql-workshop-with-ali"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ali Spittel
          </a>
        </p>
        <div className="space"></div>
        <div className="foot">
          {" "}
          Made by{" "}
          <a
            className="me"
            href="https://brianlovega.github.io/portfolio-improvements/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brian Loveless Portfolio Site
          </a>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
