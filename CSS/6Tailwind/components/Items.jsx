import React from "react";

function Items({ name, Icon, border }) {
  return (
    <div
      className={`flex items-center justify-end border-r-4  ${
        border === true ? "border-primary" : "border-white"
      } `}
    >
      <a href="#" className="px-4 flex  ">
        <span>{name}</span>
      </a>
      <Icon />
    </div>
  );
}

export default Items;
