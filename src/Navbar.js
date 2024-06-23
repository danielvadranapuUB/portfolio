import React from "react";

export default function Navbar() {
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
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Daniel Vadranapu</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={() => {}}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={() => {}}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => {}}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => {}}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => {}}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => {}}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
