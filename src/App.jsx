import { useState, useEffect } from "react";
import Enquire from "./components/Enquire";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Laminates from "./pages/Laminates";
import Plywood from "./pages/Plywood";
import Contacts from "./pages/Contacts";
import Gallary from "./pages/Gallary";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/laminates" element={<Laminates />} />
        <Route path="/plywood" element={<Plywood />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/gallery" element={<Gallary />} />
      </Routes>
      {navToggle && <Sidebar setNavToggle={setNavToggle} />}
      <Enquire navToggle={navToggle} />
    </>
  );
}

export default App;
