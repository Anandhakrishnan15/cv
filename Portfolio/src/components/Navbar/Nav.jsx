import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Nav = () => {
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 1 });
  const [navBarVisible, setNavBarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScrollData = () => {
      setScrollData((prevState) => ({
        y: window.scrollY,
        lastY: prevState.y,
      }));
    };

    window.addEventListener("scroll", handleScrollData);
    return () => {
      window.removeEventListener("scroll", handleScrollData);
    };
  }, []);

  useEffect(() => {
    if (scrollData.y > 20) {
      setNavBarVisible(false);
    } else {
      setNavBarVisible(true);
    }
    if (scrollData.y < scrollData.lastY) {
      setNavBarVisible(true);
    } else {
      setNavBarVisible(false);
    }
  }, [scrollData]);

  return (
    <nav className={`navbar ${navBarVisible ? "show" : ""}`}>
      <div className="logo">
        <Link to={'/'}>
          <img src="/logorb.png" alt="AK Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {isMobile && (
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      )}

      <div
        className={`nav-menu ${menuOpen ? "open" : ""} ${
          isMobile ? "sidebar" : "flat"
        }`}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
