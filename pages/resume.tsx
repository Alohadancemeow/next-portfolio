import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routAnimattion } from "../animations";

const resume = () => {
  return (
    <motion.div
      variants={routAnimattion}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      {/* //todo: education */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Academy of Technology(2017-2021)</p>
            <p className="my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              modi.
            </p>
          </div>
        </motion.div>

        {/* //todo: experience */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-2xl font-bold">Software Engineer Jr.</h5>
            <p className="font-semibold">Learn next JS(Apr-now)</p>
            <p className="my-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,
              modi.
            </p>
          </div>
        </motion.div>
      </div>

      {/* //todo: languages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
