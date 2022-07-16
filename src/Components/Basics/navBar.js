import { useState } from "react";
import "./navBar.css";
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          Food - Mood
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        > ---
        </button>

        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="./Restaurant">Home</a>
            </li>
            <li>
              <a href="./AboutUs">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
        };