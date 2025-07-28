import React from "react";

export default function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Daniel Vadranapu</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button className="theme-toggle-btn" onClick={onToggleDarkMode}>
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Daniel Vadranapu</div>
        <div className="hamburger-menu">
          <div
            className="hamburger-icon"
            onClick={() => {
              const menu = document.querySelector(".menu-links");
              const icon = document.querySelector(".hamburger-icon");
              menu.classList.toggle("open");
              icon.classList.toggle("open");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button className="theme-toggle-btn" onClick={onToggleDarkMode}>
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
