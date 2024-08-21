import React from "react";
import ReactDOM from "react-dom/client";

const elm = <h1>I am a JSX Element</h1>;

const Elm1 = function () {
  return <h1>I am in function JSX Element</h1>;
};
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Namaste React using Functionl Component</h1>
    </div>
  );
};
const Heading2Component = () => (
  <div>
    {elm}
    <h2>Hi Iam From Heading2Component</h2>
    {Elm1()}
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
