import styles from "./ProjectsStyles.module.css";
import grading from "../../assets/gradingSys.png";
import admings from "../../assets/admings.png";
import movieHub from "../../assets/movie.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={grading}
          link="https://github.com/RafhHitosis/CPICSTMGSFB.git"
          h3="InnoGrade"
          p="Mobile Grading System"
        />
        <ProjectCard
          src={admings}
          link="https://rafhhitosis.github.io/CPICSTMGSADMIN/"
          h3="ICSTMGS"
          p="Grading System Admin"
        />
        <ProjectCard
          src={movieHub}
          link="https://github.com/RafhHitosis/reactSimpleMovieHub.git"
          h3="React MovieHub"
          p="Sample Movielist App"
        />
      </div>
    </section>
  );
}

export default Projects;
