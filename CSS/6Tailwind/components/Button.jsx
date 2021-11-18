import React from "react";

function Button({ title, extendMe }) {
  return (
    <div>
      <a
        href="#"
        className={` ${
          extendMe == "true"
            ? "bg-secondary-100 btn text-secondary-200 hover:shadow-inner transform hover:scale-150 hover:bg-opacity-50 transition ease-in-out duration-300"
            : "text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        }`}
      >
        {title}
      </a>
    </div>
  );
}

export default Button;
