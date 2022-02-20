import React from "react";

const Hello = (props) => {
  return (
      <div>
          <h2>Hello {props.name} a.k.a {props.heroname}</h2>
      </div>
  )

//     return React.createElement(
//     "div",
//     null,
//     React.createElement("h2", null, "Hello Fahad")
//   );
};

export default Hello;
