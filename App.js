// <div id="parent">
//      <div id="child>"
//          <h1> iam inside h1 >/h1>  
//      </div>
//</div
//
//
const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am inside h1"), React.createElement("h2", {}, "I am inside h2")]
    ),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am inside h1"), React.createElement("h2", {}, "I am inside h2")]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);