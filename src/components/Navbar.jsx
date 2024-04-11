import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import arrow_down from "../assets/arrow-down-logo.png";
import logo from "../assets/logo.png";
import menu_logo from "../assets/menu_logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ setNavToggle, isMobile }) {
  let logoItem = useRef(null);
  useEffect(() => {
    // console.log(logoItem);
    gsap.fromTo(
      logoItem,
      {
        y: -50,
        duration: 1,
        // reversed: true,
      },
      {
        y: 0,
      }
    );
  }, []);

  return (
    <>
      <nav
        className="border-b-2 border-[#BC6C25] sticky top-0"
        ref={(el) => (logoItem = el)}
      >
        <div
          id="navbar"
          className="bg-transparent h-14 flex justify-between px-5 items-center"
        >
          <div id="logo" className="flex items-center gap-0">
            {/* <img src={logo} alt="logo" className="h-12  " /> */}
            <Link to="/" className="font-bold">
              OM PLYWOODS
            </Link>
          </div>
          {isMobile && <NavLinks />}
          {!isMobile && <MenuIcon setNavToggle={setNavToggle} />}
        </div>
      </nav>
    </>
  );
}

function NavLinks() {
  const [toggleCollection, setToggleCollection] = useState(false);
  return (
    <>
      <ul className="flex gap-5 ">
        <li>
          <div
            className="flex items-center gap-1.5 hover:cursor-pointer"
            onClick={() => setToggleCollection((preToggle) => !preToggle)}
          >
            Collections{" "}
            <span>
              <img className="h-3 pt-0.5" src={arrow_down} alt="" />
            </span>
            {toggleCollection && <Collections />}
          </div>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
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

function Collections() {
  return (
    <div className="absolute top-10 bg-[#BC6C25] w-36 text-[#FEFAE0] p-3 mt-2 rounded-md">
      <ul>
        <li>
          <Link to="/laminates">Laminates</Link>
        </li>
        <li>
          <Link to="/plywood">Plywood</Link>
        </li>
      </ul>
    </div>
  );
}
