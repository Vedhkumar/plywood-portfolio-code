import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  let logoItem = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    gsap.from(logoItem, {
      y: 70,
    });
  }, []);

  return (
    <>
      <nav>
        <div
          id="navbar"
          ref={(el) => (logoItem = el)}
          className="bg-[url('https://t3.ftcdn.net/jpg/03/88/86/40/360_F_388864040_2Gdl0n0vJeFdKNPT9Oj7294Zk5yPHRRA.jpg')] h-14 flex justify-between px-5 items-center"
        >
          <div id="logo" className="font-bold text-3xl">
            LOGO
          </div>
          <ul className="flex gap-5 font-bold">
            <li>
              <a href="#">About US</a>
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
        </div>
      </nav>
    </>
  );
}
