import React from "react";
import Button from "./Button";

function Top() {
  return (
    <>
      <div className="flex justify-center md:justify-end sm:justify-start">
        <Button title="Log in" />
        <Button title="Sign up" />
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Pandas</h3>
      </header>
    </>
  );
}

export default Top;
