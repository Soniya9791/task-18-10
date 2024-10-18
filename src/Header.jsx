import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <p className="logo">Logo</p>
        <div className="cont">
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p onClick={()=>{
            navigate("/Services");
          }}
          >Services</p>
          <p onClick={()=>{
            navigate("/About");
          }}
          >About US</p>
          <p onClick={()=>{
            navigate("/Contact");
          }}
          >Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
