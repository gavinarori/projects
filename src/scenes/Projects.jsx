import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        Create a sustainable and energy-efficient home design, incorporating features like passive solar heating, natural ventilation, and renewable energy sources to minimize energy consumption.
        </p>
      </div>
      <img src='https://www.constructionweekonline.com/cloud/2021/07/07/mechatronics-2-1.jpg'alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            UnderTaken projects
          </div>
          <a href="https://drive.google.com/file/d/1QrfK1OqKo-LDd51WoInyVkSMet6qIs-S/view?usp=drive_link">
          <Project title="OMOINJINI" />
          </a>
          <a href="https://drive.google.com/file/d/14JS1k0DIVywk_0Wq8P4hIU8CvdtfFa2w/view?usp=drive_link"><Project title="Wasifu" /></a>
          <a href="https://drive.google.com/file/d/1LyhMigjiFf_peQ9ERE_5Ou9SCuAZY2tf/view?usp=drivesdk"><Project title="African presentation, Autobiography presentation and others" /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
