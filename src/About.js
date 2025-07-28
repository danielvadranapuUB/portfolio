import React, { useEffect, useState } from "react";

export default function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={require("./assets/avatar.jpeg")} alt="logo" />
      </div>
      <div className="section__text">
        <p className={`section__text__p1 intro-text ${animate ? 'animate' : ''}`} style={{ animationDelay: '0.2s' }}>
          Hi, I'm
        </p>
        <h1 className={`title intro-text ${animate ? 'animate' : ''}`} style={{ animationDelay: '0.4s' }}>
          Daniel Vadranapu
        </h1>
        <p className={`section__text__p1 intro-text ${animate ? 'animate' : ''}`} style={{ animationDelay: '0.6s' }}>
          AI Engineer & Deep Learning Specialist
        </p>
        <p className={`section__text__p2 intro-text ${animate ? 'animate' : ''}`} style={{ animationDelay: '0.8s' }}>
          I architect intelligent systems that bridge computer vision, natural language processing, and real-world applications. My expertise spans from autonomous vehicle perception to generative AI models, creating scalable solutions that push the boundaries of what's possible. I thrive on building neural networks that think, see, and learn—turning complex AI challenges into elegant, deployable solutions.
        </p>
        <div id="socials-container" className={`intro-text ${animate ? 'animate' : ''}`} style={{ animationDelay: '1.2s' }}>
          <img
            src={require("./assets/linkedin.png")}
            alt="linkedin"
            className="icon"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/daniel-vadranapu/")
            }
          />
          <img
            src={require("./assets/github.png")}
            alt="My Github profile"
            className="icon"
            onClick={() => (window.location.href = "https://github.com/danielvadranapuUB")}
          />
        </div>
      </div>
    </section>
  );
}
