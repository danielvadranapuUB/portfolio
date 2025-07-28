import React, { useEffect, useRef, useState } from "react";

const skillCategories = {
  "Programming Languages": ["Python", "C++", "SQL"],
  "Deep Learning & AI": ["PyTorch", "TensorFlow", "Keras", "HuggingFace", "Transformers", "LLM", "AI", "ML"],
  "Computer Vision": ["OpenCV", "TensorRT"],
  "Data & Analytics": ["Pandas", "PySpark", "NLTK", "NLP"],
  "DevOps & Cloud": ["Docker", "AWS", "GCP", "CI/CD", "MLOps"],
  "Tools & Frameworks": ["Git", "Kafka", "FastAPI"]
};

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <p className="section__text__p1">What I Do</p>
      <h1 className="title">Skills</h1>
      <div className="skills-grid-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-tags">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className={`skill-tag ${animate ? 'animate' : ''}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
