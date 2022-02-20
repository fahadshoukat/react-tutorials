import React from "react";

const Hello = () => {
  // return (
  //     <div>
  //         <h2>Hello Fahad</h2>
  //     </div>
  // )

    return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Hello Fahad")
  );
};

export default Hello;
