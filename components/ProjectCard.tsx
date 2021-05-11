import { FunctionComponent } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { IProject } from "../type";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 dark:text-white dark:bg-dark-100 gap-x-12 md:grid-cols-2">
          <div>
            <img src={image_path} alt={name} />

            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium md-3 md:text-2xl">{name}</h2>
            <h3 className="font-medium md-3">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => {
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full right-3 focus:outline-none top-3 dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
