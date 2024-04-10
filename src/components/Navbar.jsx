import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import menu_logo from "../assets/menu_logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ setNavToggle, isMobile }) {
  let logoItem = useRef(null);
  //   useEffect(() => {
  //     console.log(logoItem);
  //     gsap.from(logoItem, {
  //       y: 70,
  //     });
  //   }, []);

  return (
    <>
      <nav className="border-b-2 border-[#BC6C25] ">
        <div
          id="navbar"
          className="bg-transparent h-14 flex justify-between px-5 items-center"
        >
          <div id="logo" className="flex items-center gap-0">
            {/* <img src={logo} alt="logo" className="h-12  " /> */}
            <Link to="/" className="font-bold">OM PLYWOODS</Link>
          </div>
          {isMobile && <NavLinks />}
          {!isMobile && <MenuIcon setNavToggle={setNavToggle} />}
        </div>
      </nav>
    </>
  );
}

function NavLinks() {
  return (
    <>
      <ul className="flex gap-5 ">
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/laminates">Collections</Link>
        </li>
        <li>
          <Link to="/gallery">Gallary</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

function MenuIcon({ setNavToggle }) {
  return (
    <>
      <img
        src={menu_logo}
        className="h-6 hover:cursor-pointer"
        alt=""
        onClick={() => setNavToggle((preSetNavToggle) => !preSetNavToggle)}
      />
    </>
  );
}
