import React from "react";

export default function Projects() {
  const ongoingProjects = [
    {
      title: "Autonomous Vehicle Perception Stack",
      description:
        "Currently developing vision-based lane detection models integrated with LLM-based driver assistance. Building real-time pipelines for camera-based drivable area segmentation and object detection for autonomous driving applications.",
    },
  ];

  const academicProjects = [
    {
      title: "Enhanced Latent Diffusion (GANs)",
      description: "Enhanced Latent Diffusion model performance by training text encoder on enriched contextual data, significantly improving image generation quality and reducing training time by 40%.",
    },
    {
      title: "Path Planning Algorithms",
      description: "Developed and implemented RRT and A* algorithms for autonomous navigation, reducing path planning computation time by 25% and improving route efficiency in complex environments.",
    },
    {
      title: "Gap Follow & Localization",
      description: "Enhanced vehicle path-following strategies achieving 20% increase in navigation accuracy. Leveraged AMCL localization algorithm improving pose estimation accuracy by 30% in dynamic environments.",
    },
    {
      title: "Multi-Modal VQA Framework",
      description: "Designed deep cross-attention frameworks for visual question answering, achieving 7% improvement in answer accuracy through innovative attention mechanisms and data fusion techniques.",
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">My Work</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="project-containers">
          {ongoingProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <p className="section__text__p1">Academic & Research Projects</p>
        <div className="project-containers">
          {academicProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <div className="details-container color-container">
      <h2 className="experience-sub-title project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
    </div>
  );
};
