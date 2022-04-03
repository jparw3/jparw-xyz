import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/outline';
import { Tooltip } from '@chakra-ui/tooltip';

function Hero() {
  return (
    <div>
      <div className="absolute z-0 top-0 md:-top-[10%] right-0 overflow-hidden max-w-[1100px]">
        <img
          className="static left-auto md:rotate-0 rotate-[60deg]  opacity-80 bottom-auto overflow-hidden min-w-[1000px] mr-0 pt-0"
          src="/images/blurBG.png"
          alt="bg"
        />
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative z-40 mt-20"
      >
        <h1 className="font-poppins text-gray text-[44px] md:text-[80px] md:leading-[90px] font-medium leading-[50px]">
          A freelance front-end engineer with a strong focus on interfaces and
          experiences.{' '}
        </h1>
      </motion.div>
      <Tooltip
        placement="right"
        label="Let's work together!"
        className="text-[#62656D] bg-white shadow-md p-2 rounded-lg"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="z-40 relative flex cursor-pointer items-center text-[#62656D] space-x-1 mt-6 text-sm md:text-lg bg-white shadow-md p-2 rounded-lg w-fit"
        >
          <p>Curently available for work</p>
          <motion.div
            animate={{ y: [1, -1] }}
            transition={{ repeat: Infinity, repeatType: 'reverse' }}
          >
            <CheckIcon className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </Tooltip>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="relative z-40 px-5 py-4 mt-4 text-sm font-semibold text-white rounded-lg shadow-md md:py-5 md:px-10 md:mt-12 md:text-lg w-fit bg-gray"
      >
        View Work
      </motion.div>
    </div>
  );
}

export default Hero;
