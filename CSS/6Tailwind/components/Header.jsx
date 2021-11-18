import React from "react";

function Header({ title, Icon }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold  uppercase p-4 border-b border-gray-100">
        <a className="hover:text-gray-700" href="/">
          {title}
        </a>
      </h1>
      <div className="px-4 cursor-pointer md:hidden lg:hidden" id="burger">
        <Icon />
      </div>
    </div>
  );
}

export default Header;
