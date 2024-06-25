export default function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={require("./assets/email.png")}
            alt="email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:examplemail@gmail.com">
              daniel.vadranapu@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={require("./assets/linkedin.png")}
            alt="linkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://www.linkedin.com/in/daniel-vadranapu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={require("./assets/phone.png")}
            alt="phone icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com"> +1-716-3484581</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={require("./assets/github.png")}
            alt="linkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a
              href="https://github.com/danielvadranapuUB"
              target="_blank"
              rel="noreferrer"
            >
              github.com/danielvadranapuUB
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
