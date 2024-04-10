import { useState, useEffect } from "react";
import Enquire from "./components/Enquire";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for window width
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Navbar setNavToggle={setNavToggle} isMobile={isMobile} />
      <Enquire navToggle={navToggle} />
      {navToggle && <Sidebar setNavToggle={setNavToggle} />}
    </>
  );
}

export default App;
