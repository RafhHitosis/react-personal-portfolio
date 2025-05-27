import styles from "./EducationExperience.module.css";
import { useTheme } from "../../common/ThemeContext";

function EducationExperience() {
  const { theme } = useTheme();

  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Innovative College of Science & Technology",
      period: "2021 - 2025",
    },
  ];

  const experienceData = [
    {
      position: "Front-End Web Developer - OJT",
      company: "MWeeb Inc.",
      period: "Jan 2025 – Apr 2025",
    },
  ];

  return (
    <section
      id="education-experience"
      className={`${styles.container} ${styles[theme]}`}
    >
      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Education</h1>
        <div className={styles.content}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.title}>{item.degree}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>
              <h4 className={styles.subtitle}>{item.school}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Experience</h1>
        <div className={styles.content}>
          {experienceData.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.header}>
                <h3 className={styles.title}>{item.position}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>
              <h4 className={styles.subtitle}>{item.company}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationExperience;
