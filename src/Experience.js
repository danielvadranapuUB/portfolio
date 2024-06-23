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
        "Strategic Project Management: Led cross-functional teams in the successful execution of multiple high-impact projects, ensuring alignment with strategic business objectives and timelines.",
        "Client Engagement and Satisfaction: Played a key role in client interactions and project scoping, ensuring client expectations were met or exceeded. Received positive feedback for delivering innovative solutions and surpassing project goals.",
        "Continuous Process Improvement: Initiated and implemented continuous improvement initiatives within the computer vision and AI teams, optimizing workflows.",
        "Knowledge Sharing and Training: Developed and conducted training sessions on emerging technologies and best practices in computer vision and AI for internal teams, fostering a culture of continuous learning and upskilling.",
        "Collaborative Innovation: Actively participated in cross-functional innovation sessions, contributing ideas and solutions that led to new product features and improved service offerings, driving company growth and market competitiveness.",
        "Thought Leadership and Industry Contribution: Published articles or presented at industry conferences on topics related to computer vision, AI applications, or technological advancements, establishing thought leadership and enhancing company reputation in the industry.",

        // "Automatic Number Plate Recognition - Implemented an efficient system using YOLOv8 and Vision Transformers for accurate identification of vehicle number plates.",
        // "PPE Kit Identification - Deployed YOLOv8 to identify individuals wearing protective equipment in construction sites, significantly enhancing workplace safety.",
        // "Synthetic Data Generation - Employed advanced image processing techniques to generate synthetic datasets, enhancing automatic number plate recognition and littering detection on roadways.",
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
        "Lead Research and Development Initiatives: Spearhead research and development projects focused on advancing computer vision and deep learning technologies for autonomous systems. Drive innovation in object detection, segmentation, and trajectory prediction to enhance the capabilities of autonomous vehicles.",
        "Algorithm Design and Optimization: Design, optimize, and validate convolutional neural networks (CNNs) and other machine learning models for tasks such as object detection, segmentation, and real-time processing. Implement state-of-the-art algorithms and architectures to improve accuracy, efficiency, and robustness in challenging environments.",
        "System Integration and Deployment: Integrate computer vision algorithms and models into autonomous driving systems, ensuring compatibility and performance on hardware platforms like Jetson AGX and other edge devices. Collaborate with hardware engineers and software developers to optimize algorithms for real-time processing and low-latency applications.",
        "Data Processing and Augmentation: Develop tools and pipelines for data preprocessing, augmentation, and annotation to enhance the quality and diversity of training datasets. Implement strategies for handling edge cases and rare scenarios to improve model generalization and reduce false positives in object detection.",
        "Performance Evaluation and Optimization: Conduct thorough performance evaluations of deep learning models and frameworks using benchmark datasets and diverse hardware configurations. Identify bottlenecks, optimize algorithms, and implement acceleration techniques (e.g., TensorRT) to improve inference speed and efficiency.",
        // "Segmentation and Detection using Single Backbone - Developed a novel architecture capable of simultaneous object detection and segmentation using a single backbone network.",
        // "Trajectory Prediction - Predicted trajectories of vehicles in close proximity to the ego vehicle for enhanced driving safety.",
        // "Real-Time Deployment - Optimized YOLOv3 performance using the TensorRT library, resulting in a significant increase in frames per second (fps) and deployment on the Jetson AGX platform.",
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
        {/* <p>Tools: {experience.tools}</p> */}
      </div>
    </div>
  );
};
