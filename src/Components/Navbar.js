import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/Netflix_Logo_RGB.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
        setShow(true);
    } else {
        setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    // cleanup
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img src={logo} className="nav__logo" onClick={() => navigate('/')} />
        <img
          src="https://imgs.search.brave.com/_42duozO-M1k4yVNiV6RBp9bydAFr1AVLNaP1QATwIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdXBsb2Fk/Lndpa2ltZWRpYS5v/cmcvd2lraXBlZGlh/L2NvbW1vbnMvMC8w/Yi9OZXRmbGl4LWF2/YXRhci5wbmc"
          className="nav__avatar"
          onClick={() => navigate('/profile')}
        />
      </div>
    </div>
  );
}

export default Navbar;
