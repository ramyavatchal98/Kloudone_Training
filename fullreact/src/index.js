import React from "react";
import ReactDom from "react-dom";
import "./index.css";
//stateless func component or Dummy function
//alwyas return JSX

//function Greeting() {
/*return (
    <div>
      <h2>Hii Nice!</h2>
      <h4>Hello World</h4>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));*/

//booklist

function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
        alt=""
      />
      <h2>Buy this</h2>;<h4>No author</h4>;
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
