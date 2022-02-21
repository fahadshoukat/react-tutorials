import React from "react";

const Hello = (props) => {
  const {name, heroname} = props
  return (
      <div>
          <h2>Hello {name} a.k.a {heroname}</h2>
      </div>
  )

//     return React.createElement(
//     "div",
//     null,
//     React.createElement("h2", null, "Hello Fahad")
//   );
};

export default Hello;
