export default function Profile() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={require("./assets/experience.png")}
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                4+ years <br />
                Deep Learning Engineer
              </p>
            </div>
            <div className="details-container">
              <img
                src={require("./assets/education.png")}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Masters in Robotics and Artificial Intelligence, University at
                Buffalo
                <br />
                B.tech. Electronics and Communication, IIIT Guwahati
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a versatile professional specializing in the intersection of
              autonomous systems, artificial intelligence, and computer vision.
              Currently engaged in cutting-edge projects, I am developing a
              state-of-the-art Visual Question Answering (VQA) architecture that
              employs advanced attention mechanisms, multi-modal fusion, and
              adversarial training to achieve superior accuracy. Concurrently, I
              am implementing NDT scan matcher for precise vehicle localization
              and integrating EagleEye sensor platforms within the Autoware
              project, aiming to enhance perception accuracy for autonomous
              driving systems.
            </p>
            <p>
              With a solid foundation from my roles as Assistant Manager at Tata
              Insights and Quants and Deep Learning Engineer at Flux Auto, I
              have deployed robust systems like YOLOv8 for automatic number
              plate recognition and developed novel architectures for object
              detection and segmentation using single backbone networks. My
              academic pursuits have further enriched my skills, particularly in
              enhancing image generation through Latent Diffusion models and
              optimizing path planning algorithms such as RRT and A* for
              autonomous navigation in simulation environments.
            </p>
            <p>
              Proficient in Python and C++, I leverage frameworks like PyTorch,
              TensorFlow, and OpenCV to innovate and optimize solutions. I
              thrive in dynamic environments where my expertise in machine
              learning, deep learning, and autonomous systems drives impactful
              advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
