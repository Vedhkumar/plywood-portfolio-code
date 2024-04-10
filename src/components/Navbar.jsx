import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import logo from "../assets/logo.png";
import menu_logo from "../assets/menu_logo.png";

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
            <p className="font-bold">OM PLYWOODS</p>
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
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Gallary</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
