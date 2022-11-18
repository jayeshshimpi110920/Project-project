import React from "react";
// import '../../App.css';
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container" style={{width:"100vw"}}>
      <video style={{width:"110vw"}} src="/videos/video3.mp4" autoPlay loop muted />
      <h1 style={{fontSize:"6vw"}}>Job Search Made Easier</h1>
      <p style={{fontSize:"7vw"}}>What are you waiting for?</p>
      <div className="hero-btns">
        <Link style={{ textDecoration: "none" }} to="/viewjobs">
          <button className="green_btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
