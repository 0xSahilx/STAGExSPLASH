import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";
import { IoSparklesSharp } from "react-icons/io5";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row h-[75vh] md:h-[90vh] items-center justify-center px-10 md:px-20 mt-10 md:mt-40 w-full z-[20]"
    >
      <div className="text-center md:text-start h-full w-full flex flex-col gap-5 justify-center m-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] top-[-900px] md:top-[-200px]"
        >
          <IoSparklesSharp className="text-[#b49bff] mr-[7px] h-6 w-10" />
          <h1 className="Welcome-text text-[13px]">BOOK NOW!</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 mt-8 text-cente text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto z-[999] absolute  top-[225px] "
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            Artists like never before!
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          initial="hidden"
          animate="visible"
          className="text-xl text-gray-400 md:my-5 max-w-[600px] top-[700px]"
        >
          We are one stop to hire the finest musicians, singers and top-tier
          sound system.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          initial="hidden"
          animate="visible"
          className="hidden md:flex py-2 justify-center button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;
