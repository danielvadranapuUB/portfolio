export default function Skills() {
  const languages = [
    {
      title: "Python",
      icon: require("./assets/python.jpeg"),
    },
    {
      title: "C++",
      icon: require("./assets/c++.png"),
    },
  ];
  const libraries = [
    { title: "Pytorch", icon: require("./assets/pytorch.png") },
    { title: "Tensorflow", icon: require("./assets/tensorflow.png") },
    { title: "OpenCV", icon: require("./assets/opencv.png") },
    { title: "Scikit-learn", icon: require("./assets/scikit-learn.png") },
    { title: "Pandas", icon: require("./assets/pandas.png") },
    { title: "Matplotlib", icon: require("./assets/matplotlib.png") },
  ];
  const tools = [
    { title: "Git", icon: require("./assets/git.png") },
    { title: "Docker", icon: require("./assets/docker.png") },
    {
      title: "Kafka",
      icon: require("./assets/kafka.png"),
    },
    {
      title: "ROS",
      icon: require("./assets/ros.png"),
    },
    {
      title: "ROS2",
      icon: require("./assets/ros2.png"),
    },
  ];
  return (
    <section id="skills">
      <p className="section__text__p1">What I Do</p>
      <h1 className="title">Skills</h1>

      <p className="section__text__p1">Libraries</p>
      <div className="skills-container">
        {libraries.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
      <p className="section__text__p1">Tools/Frameworks</p>
      <div className="skills-container">
        {tools.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>

      <p className="section__text__p1">Programming Languages</p>
      <div className="skills-container">
        {languages.map((skill) => (
          <SkillCard skill={skill} />
        ))}
      </div>
    </section>
  );
}

const SkillCard = ({ skill }) => {
  return (
    <div className="details-container color-container">
      <div>
        <img src={skill.icon} alt="Skill 1" className="skill-img" />
      </div>
      <h2 className="experience-sub-title project-title">{skill.title}</h2>
    </div>
  );
};
