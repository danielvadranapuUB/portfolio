import tcs from "./assets/tcs.jpeg";
import fluxauto from "./assets/fluxauto_logo.jpeg";

export default function Experience() {
  const experiences = [
    {
      logoLocation: tcs,
      companyName: "Tata Insights and Quants",
      role: "Assistant Manager Analyst",
      timeLine: "June 2021 - August 2023",
      location: "Bangalore, India",
      tools:
        "Python, Django, Flask, MySQL, PostgreSQL, MongoDB, HTML5, CSS, Java, C++",
      highlights: [
        "Automatic Number Plate Recognition - Implemented an efficient system using YOLOv8 and Vision Transformers for accurate identification of vehicle number plates.",
        "PPE Kit Identification - Deployed YOLOv8 to identify individuals wearing protective equipment in construction sites, significantly enhancing workplace safety.",
        "Synthetic Data Generation - Employed advanced image processing techniques to generate synthetic datasets, enhancing automatic number plate recognition and littering detection on roadways.",
      ],
    },
    {
      logoLocation: fluxauto,
      companyName: "Flux Auto",
      role: "Deep Learning Engineer",
      timeLine: "June 2021 - August 2023",
      location: "Bangalore, India",
      tools:
        "Python, Django, Flask, MySQL, PostgreSQL, MongoDB, HTML5, CSS, Java, C++",
      highlights: [
        "Segmentation and Detection using Single Backbone - Developed a novel architecture capable of simultaneous object detection and segmentation using a single backbone network.",
        "Trajectory Prediction - Predicted trajectories of vehicles in close proximity to the ego vehicle for enhanced driving safety.",
        "Real-Time Deployment - Optimized YOLOv3 performance using the TensorRT library, resulting in a significant increase in frames per second (fps) and deployment on the Jetson AGX platform.",
      ],
    },
  ];
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        {experiences.map((experience) => (
          <ExperienceCard
            experience={experience}
            key={experience.companyName}
          />
        ))}
      </div>
    </section>
  );
}

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div>
        <div className="company-section">
          <img
            src={experience.logoLocation}
            alt="Experience icon"
            className="icon"
          />
          <p>{experience.companyName}</p>
        </div>
        <div>
          <p>
            {experience.role} · {experience.timeLine} · {experience.location}
          </p>
        </div>
        <div>
          <ul>
            {experience.highlights.map((highlight, idx) => (
              <li key={idx}> {highlight}</li>
            ))}
          </ul>
        </div>
        <p>Tools: {experience.tools}</p>
      </div>
    </div>
  );
};
