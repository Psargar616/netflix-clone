import React, { useState } from "react";
import "./ProfileScreen.css";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { selectuser } from "../features/userSlice";
import { auth } from "../firebase";
const ProfileScreen = () => {
  const user = useSelector(selectuser);
  const [plan, setPlan] = useState("Standard");
  const buttonPressed = (e) => {
    e.target.classList.toggle("active");
  }
  return (
    <div className="profileScreen">
      <Navbar></Navbar>
      <div className="profileScreen__body">
        <h1> Edit Profile </h1>
        <div className="profileScreen__info">
          <img src="https://imgs.search.brave.com/_42duozO-M1k4yVNiV6RBp9bydAFr1AVLNaP1QATwIY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdXBsb2Fk/Lndpa2ltZWRpYS5v/cmcvd2lraXBlZGlh/L2NvbW1vbnMvMC8w/Yi9OZXRmbGl4LWF2/YXRhci5wbmc" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans : Current Plan ({plan})</h3>
              <div className="profileScreen__planscreen">
                <div className="profileScreen__planscreenProduct">
                  <p>Premium <br/> 4K + HDR</p>
                  <button type="select" onClick={() => setPlan("Premium")}>Subscribe </button>
                </div>
                <div className="profileScreen__planscreenProduct">
                  <p>Basic <br/> 720p</p>
                  <button type="select" onClick={() => setPlan("Basic") }> Subscribe </button>
                </div>
                <div className="profileScreen__planscreenProduct">
                  <p>Standard <br/> 1080p</p>
                  <button onClick={() => setPlan("Standard") } type="select"> Subscribe</button>
                </div>
              </div>

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
