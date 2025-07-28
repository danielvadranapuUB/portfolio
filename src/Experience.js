import tcs from "./assets/tcs.jpeg";
import fluxauto from "./assets/fluxauto_logo.jpeg";
import cavasLab from "./assets/cavas-lab.png";
import idrive from "./assets/IDrive.jpeg";

export default function Experience() {
  const experiences = [
    {
      logoLocation: idrive,
      companyName: "IDrive (2025–Present)",
      role: "AI Engineer",
      timeLine: "Los Angeles, CA",
      website: "https://www.idrive.com/",
      highlights: [
        "Collaborating on mimicking Comma.ai's perception and planning stack using vision-based lane detection models integrated with LLM-based driver assistance.",
        "Developing real-time pipelines for camera-based drivable area segmentation and object detection, optimizing performance for in-vehicle deployment.",
      ],
    },
    {
      logoLocation: null,
      companyName: "Nexquared (2024–Present)",
      role: "AI Engineer",
      timeLine: "Los Angeles, CA",
      website: "https://app.nexquared.com/",
      highlights: [
        "Launched job-matching platform using LLMs to extract skills, visa, and clearance data, processing 10,000+ job postings per day.",
        "Built multi-threaded metadata extractor using Ollama on consumer GPUs with PostgreSQL backend and React/Next.js frontend.",
      ],
    },
    {
      logoLocation: cavasLab,
      companyName: "University at Buffalo (2023–2024)",
      role: "Research Assistant",
      timeLine: "New York, US",
      website: "https://ubwp.buffalo.edu/cavas/",
      highlights: [
        "Designed deep cross-attention frameworks for VQA achieving 7% improvement in answer accuracy.",
        "Integrated LiDAR and GPS data into Autoware pipeline, increasing vehicle localization precision by 12%.",
      ],
    },
    {
      logoLocation: tcs,
      companyName: "Tata Insights and Quants (2021–2023)",
      role: "Assistant Manager - Deep Learning",
      timeLine: "Bangalore, India",
      website: "https://www.tataiq.com/",
      highlights: [
        "Developed real-time license plate detection with 90% accuracy processing 20 vehicles/hour.",
        "Launched YOLOv8 model achieving 98% accuracy in PPE detection, reducing safety violations significantly.",
      ],
    },
    {
      logoLocation: fluxauto,
      companyName: "Flux Auto (2019–2021)",
      role: "Deep Learning Engineer",
      timeLine: "Bangalore, India",
      website: "https://fluxauto.ai/",
      highlights: [
        "Designed object detector ConvNet improving YOLOv3 MAP@75 by 38% on Berkeley Deep-Drive dataset.",
        "Built novel architecture for simultaneous object detection and segmentation, reducing computational complexity by 50%.",
      ],
    },
  ];
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="project-containers">
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
    <div className="details-container color-container">
      <div className="company-section">
        {experience.logoLocation ? (
          <img
            src={experience.logoLocation}
            alt="Experience icon"
            className="icon"
          />
        ) : (
          <div className="company-initial">{experience.companyName.split(' ')[0][0]}</div>
        )}
        <p>
          <a href={experience.website} target="_blank" rel="noopener noreferrer">
            {experience.companyName}
          </a>
        </p>
      </div>
      <div>
        <p>
          {experience.role} · {experience.timeLine}
        </p>
      </div>
      <div>
        <ul>
          {experience.highlights.map((highlight, idx) => (
            <li key={idx}> {highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
