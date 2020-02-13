import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom";


/// Since hooks is used can't do too much testing here


// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
// test('renders portfolio link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/portfolio/i);
//   expect(linkElement).toBeInTheDocument();
// });

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
    console.log("2+2 yep");
  });
});

test("knows that 3 times 3 equals 9", () => {
  expect(3 * 3).toBe(9);
  console.log("3x3 yeah-uh-huh");
});
