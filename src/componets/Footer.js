import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <h1>
          <Link to="/">Nike</Link>
        </h1>
      </div>
    </footer>
  );
};
