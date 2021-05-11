import { projects as projectsData } from "../data";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { useState } from "react";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, routAnimattion, stagger } from "../animations";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    // # Check category
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    // else
    // # When other categories is actived
    // # Filltering category === category(param)
    const newArray = projectsData.filter((project) => {
      return project.category.includes(category);
    });
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      variants={routAnimattion}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={fadeInUp}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
