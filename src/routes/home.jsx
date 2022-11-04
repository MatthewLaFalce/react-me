import React from "react";
import portrait from "../images/tree_portrait.png";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${portrait})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to my Portfolio!</h1>
          <p className="mb-5"></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
