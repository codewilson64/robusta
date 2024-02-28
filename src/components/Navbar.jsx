import { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center py-6 px-[7%] justify-between font-poppins text-white bg-black z-[0]">
      <div className="nav-left text-[24px] font-semibold">Coffee</div>
      <div className="nav-right">
        <ul className="list-none sm:flex hidden">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} />
      </div>

      <div className={`${toggle ? "flex" : "hidden"} absolute top-20 right-0 p-6 bg-black my-2 w-full z-[5] border-b border-[#ccc] sidebar`}>
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal text-white text-[16px] hover:text-slate-400 cursor-pointer ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
