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
              With over 4 years of professional experience, I currently serve as
              a Research Assistant at Cavas Lab, specializing in integrating
              Autoware software onto Lincoln vehicles to advance autonomous
              driving. Previously, at Tata Insights and Quants, I excelled as an
              Assistant Manager in video analytics, leading the development of
              comprehensive solutions:
            </p>
            <p>
              I pioneered the implementation of high-accuracy Automatic Number
              Plate Recognition (ANPR) systems, significantly enhancing vehicle
              tracking and reducing unauthorized access incidents. Utilizing
              advanced perception algorithms and YOLOv8 models, I strengthened
              workplace safety by accurately identifying individuals wearing
              protective equipment and optimized operational workflows with
              efficient two-stage detection pipelines.
            </p>
            <p>
              Furthermore, I applied synthetic data generation techniques to
              improve ANPR accuracy and detect littering incidents on roadways.
              I also played a pivotal role in mentoring interns, nurturing their
              skills in computer vision and fostering innovative solutions.
            </p>
            <p>
              At Flux Auto, I specialized as a Deep Learning Engineer, driving
              cutting-edge research in Convolutional Neural Networks (CNNs) for
              object detection and segmentation. I successfully integrated AI
              algorithms into autonomous systems, ensuring optimal performance
              across diverse hardware platforms and conducting rigorous
              performance evaluations to enhance model efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
