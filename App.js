import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Namaste React using Functionl Component</h1>
    </div>
  );
};
const Heading2Component = () => (
    <div>
    <h2>Hi Iam From Heading2Component</h2>
    </div>
);
const JsxHeading = () => (
  <div>
    <h1 id="heading">
      Namaste React using JSX Namaste NodeJS Namaste JavaScript
    </h1>
    <HeadingComponent />
    <Heading2Component />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading />);
