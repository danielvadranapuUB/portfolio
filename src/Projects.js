import vqa from "./assets/vqa.jpeg";
import localization from "./assets/localisation.png";
import endToEnd from "./assets/end_to_end_llm.png";
import txtToImg from "./assets/txt_to_img.png";

export default function Projects() {
  const academicProjects = [
    {
      title: "Text to Image Generation",
      description:
        "Enhanced Latent Diffusion model performance by training the text encoder on enriched contextual data, significantly improving Image generation. The enriched contextual data included diverse and extensive textual descriptions, enabling the model to better understand and translate textual prompts into visually coherent and detailed images.",
      image: txtToImg,
    },
    {
      title: "RRT and A* on simulator",
      description:
        "Implemented RRT and A* algorithms in simulation environments to optimize path planning and navigation for autonomous systems, demonstrating proficiency in algorithmic optimization and simulation-based testing.",
      video:
        "https://drive.google.com/file/d/1oxUDM8UprO2nKVV1DJ7-BrmjGDeCujXH/preview",
    },
    {
      title: "Pure Pursuit and GAP Follow",
      description:
        "Applied Pure Pursuit and Gap Follow methods to enhance autonomous navigation in simulation environments, optimizing vehicle path-following and obstacle avoidance strategies for efficient and safe operation.",
      video:
        "https://drive.google.com/file/d/1xPp2XVfkn3WWUzmNuzND6GX644zcDpod/preview",
    },
    {
      title: "AMCL Localization",
      description:
        "Implemented AMCL localization algorithm in simulation environments to accurately estimate the pose of autonomous vehicles, demonstrating proficiency in localization techniques essential for autonomous navigation and control.",
      video:
        "https://drive.google.com/file/d/1wwLzoo2q2bCaionZew_ch1TVYHkdVSvt/preview",
    },
  ];

  const ongoingProjects = [
    {
      title: "Visual Question and Answer",
      description:
        "Developing a state-of-the-art VQA architecture focusing on advanced attention mechanisms, multi-modal fusion, adversarial training, and fine-grained evaluation metrics to significantly boost accuracy.",
      image: vqa,
    },
    {
      title: "Localisation",
      description:
        "Implementing NDT scan matcher for precise vehicle localization and integrating EagleEye sensor platform to enhance perception accuracy in ongoing development of autonomous driving systems within the Autoware project.",
      image: localization,
    },
    {
      title: "End to End Decision making of Autonomous vehicle using LLM",
      description:
        "Working on the integration of Large Language Models (LLMs) for state estimation in autonomous vehicles, enhancing perception accuracy and decision-making capabilities through advanced natural language processing and machine learning techniques.",
      image: endToEnd,
    },
  ];
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <p className="section__text__p1">Ongoing Projects</p>
        <div className="project-containers">
          {ongoingProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <p className="section__text__p1">Academic Projects</p>
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
      <div className="article-container">
        {project.video ? (
          <iframe
            src={project.video}
            type="video/quicktime"
            allow="autoplay"
            title="video"
            allowFullScreen
            className="project-img"
          />
        ) : (
          <img src={project.image} alt="Project 1" className="project-img" />
        )}
      </div>
      <h2 className="experience-sub-title project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
    </div>
  );
};
