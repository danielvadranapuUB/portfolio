import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import ChatBot from "./ChatBot";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'all 0.8s ease';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((d) => !d)} />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <ChatBot />
    </div>
  );
}

export default App;
