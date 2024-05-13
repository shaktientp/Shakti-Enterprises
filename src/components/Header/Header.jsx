import React, { useState, useEffect } from "react";
import { LogoutBtn } from "../index";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight && location.pathname === "/") {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    if (location.pathname !== "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Products",
      slug: "/products",
      active: true,
    },
    {
      name: "Services",
      slug: "/services",
      active: true,
    },
    {
      name: "Become Authorised Retailer",
      slug: "/become-authorised-retailer",
      active: true,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
  ];

  return (
    <header
      className={`header ${isSticky ? "sticky" : ""} ${
        isHome ? "" : "non-home"
      }`}>
      <div className="logo-container">
        <Link to="/">
          <img src="logo.png" alt="Shakti Enterprise" className="logo" />
        </Link>
      </div>
      <nav
        className={`nav ${isMobileNavOpen ? "open" : ""} ${
          isHome ? "" : "non-home-nav"
        } ${isSticky ? "nav-sticky" : ""}`}>
        <ul className="nav-list">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => {
                    navigate(item.slug);
                    setMobileNavOpen(false);
                  }}
                  className="nav-link">
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
      <div
        className="mobile-toggle"
        onClick={() => setMobileNavOpen(!isMobileNavOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
}

export default Header;
