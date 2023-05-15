import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" style={{ display:"flex",flexDirection:"column",justifyContent: "center", alignItems : "center"}}>
      <button className="text-center" style={{backgroundColor:"black",fontSize:"1rem",padding:"5px",style:"none"}}>Donate Now</button>
      <h1 className="text-center">All Right Reserved &copy; PetFinder</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
