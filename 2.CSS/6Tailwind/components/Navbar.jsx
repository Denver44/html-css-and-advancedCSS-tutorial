import React from "react";
import Item from "./Items";
import HomeIcon from "../public/icons/HomeIcon";
import MailIcon from "../public/icons/MailIcon";
import QuestionMarkIcons from "../public/icons/QuestionMarkIcons";
import Header from "./Header";
import BurgerIcon from "../public/icons/BurgerIcon";

function Navbar() {
  return (
    <div>
      <nav className="text-right">
        <Header title={"Food Panda"} Icon={BurgerIcon} />
        <ul className="text-sm mt-6 hidden md:block" id="menu">
          <li className="text-gray-700 font-bold py-1">
            <Item name={"Home"} Icon={HomeIcon} border={true} />
          </li>
          <li className="py-1">
            <Item name={"About"} Icon={QuestionMarkIcons} />
          </li>
          <li className="py-1">
            <Item name={"Contact-us"} Icon={MailIcon} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
