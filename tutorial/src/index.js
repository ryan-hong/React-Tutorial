import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>john do</h2>; // implicit return
// const Message = () => {
//   // explicit return
//   return <p>this is a message</p>;
// };

//! Mini Book Project

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/61nZqhftUPL._AC_UL320_.jpg"
    alt=""
  />
);

const Title = () => <h1>The Hunger Games</h1>;

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Suzanne Collins
  </h4>
  // inline styling requires {{}} to go from jsx to js, camelcase and quotations also required
  // inline css overpowers external css file
);

ReactDOM.render(<BookList />, document.getElementById("root"));
