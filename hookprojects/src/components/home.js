import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>It's REACT HOOKS!!!</h1>
      <p style={{ fontSize: "21px" }}>
        Hooks are functions that let you “hook into” React state and lifecycle
        features from function components. Hooks don’t work inside classes —
        they let you use React without classes. (We don’t recommend rewriting
        your existing components overnight but you can start using Hooks in the
        new ones if you’d like.) React provides a few built-in Hooks like
        useState. You can also create your own Hooks to reuse stateful behavior
        between different components. We’ll look at the built-in Hooks first.
      </p>
    </div>
  );
};

export default Home;
