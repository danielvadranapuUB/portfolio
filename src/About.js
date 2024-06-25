import resume from "./assets/resume.pdf";

export default function About() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={require("./assets/avatar.jpeg")} alt="logo" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Daniel Vadranapu</h1>
        <p className="section__text__p1">Area of interests</p>
        <p className="section__text__p2">
          Generative AI, Deep Learning, Perception, Computer Vision, Autonomous
          Vehicles, Robotics
        </p>
        <div className="btn-container">
          <button className="btn btn-color-2">
            <a href={resume} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </button>
          <button className="btn btn-color-1" onClick={() => {}}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
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
            onClick={() => (window.location.href = "https://github.com/")}
          />
        </div>
      </div>
    </section>
  );
}
