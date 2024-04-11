import close_logo from "../assets/close_logo.png";
import arrow_down from "../assets/arrow-down-logo.png";

import { Link } from "react-router-dom";

export default function Sidebar({ setNavToggle }) {
  return (
    <>
      <nav className="absolute right-0 top-0 border-l-2 border-[#FEFAE0]">
        <div className="bg-[#BC6C25] w-[50vw] h-[100vh] pt-6 pl-6">
          <ul className="flex gap-5 text-[#FEFAE0] flex-col">
            <li className="absolute right-5 top-4">
              <img
                src={close_logo}
                className="h-6 hover:cursor-pointer"
                alt=""
                onClick={() =>
                  setNavToggle((preSetNavToggle) => !preSetNavToggle)
                }
              />
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <div className="flex items-center gap-1.5 hover:cursor-pointer">
                Collections{" "}
                <span>
                  <img className="h-3 pt-0.5" src={arrow_down} alt="" />
                </span>
              </div>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
