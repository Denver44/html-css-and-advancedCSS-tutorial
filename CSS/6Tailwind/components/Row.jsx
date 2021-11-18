import React from "react";
import Card from "./Card";

function Row({ title }) {
  return (
    <div>
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">{title}</h4>
        {title == "Latest Recipe" ? (
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <Card
              imgSrc="./images/6.jpg"
              title="Honey Cake"
              chef="Recipe by Mario"
              timing="10 min"
            />
            <Card
              imgSrc="./images/2.jpg"
              title="Veg Noodles"
              chef="Recipe by Mario"
              timing="15 min"
            />
            <Card
              imgSrc="./images/3.jpg"
              title="Tofu Curry"
              chef="Recipe by Mario"
              timing="45 min"
            />
          </div>
        ) : (
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <Card
              imgSrc="./images/8.jpg"
              title="Egg Stew"
              chef="Recipe by Mario"
              timing="14 min"
            />
            <Card
              imgSrc="./images/5.jpg"
              title="Veg Pizza"
              chef="Recipe by Mario"
              timing="30 min"
            />
            <Card
              imgSrc="./images/4.jpg"
              title="5 bean Chilli Stew"
              chef="Recipe by Mario"
              timing="22 min"
            />
          </div>
        )}
    </div>
  );
}

export default Row;
