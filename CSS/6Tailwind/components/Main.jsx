import React from "react";
import Button from "./Button";
import Top from "./Top";
import Row from "./Row";

function Main() {
  return (
    <>
      <Top />
      <div>
        <Row title={"Latest Recipe"} />
        <Row title={"Most Popular"} />
        <div className="mt-8 ">
          <div className="flex justify-center">
            <Button title={"Load More"} extendMe={"true"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
