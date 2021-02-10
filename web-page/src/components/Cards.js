import React from "react";
import CardItem from "./CardItem";
import "./Card.css";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Delicious Cakes!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/img2.jpg"
              text="Cake with chocolate"
              label="Cake"
              path="/Cakes"
            />
            <CardItem
              src="images/img3.jpg"
              text="Cake with chocolate"
              label="Cake"
              path="/Cakes"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="images/img4.jpg"
              text="Cake with chocolate"
              label="Cake"
              path="/Cakes"
            />
            <CardItem
              src="images/img5.jpg"
              text="Cake with chocolate"
              label="Cake"
              path="/Cakes"
            />
                        <CardItem
              src="images/img6.jpg"
              text="Cake with chocolate"
              label="Cake"
              path="/Cakes"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
