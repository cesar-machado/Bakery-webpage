import React from "react";
import Button from "./Button";
import './Main.css'
// import cakes from "../assets/videos/video-2.mp4";

function Main() {
  return (
    <div className="main-container">
      <video src='/videos/cakes-2.mp4' autoPlay loop muted />
      <h1>Beautiful e delicious Cakes </h1>
      <p>What are you waiting</p>
      <div className="main-btns">
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            Order Now
        </Button>
      </div>
    </div>
  );
}

export default Main;
