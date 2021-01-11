import React from "react";
import ReactDOM from "react-dom";

//! stateless functional component
// always return JSX

// function Greeting() {
//   return (
//     <div>
//       <h4>this is ryan and this is my first component</h4>
//     </div>
//   );
// }

// const alternative --> can get pretty messy

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

//! Nested Components

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>; // implicit return
const Message = () => {
  // explicit return
  return <p>this is a message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
