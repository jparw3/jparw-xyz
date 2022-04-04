import { AnimatePresence, motion } from 'framer-motion';
import { Tooltip } from '@chakra-ui/tooltip';

function Hero() {
  return (
    <div>
      <div className="absolute z-0 top-0 md:-top-[10%] right-0 overflow-hidden max-w-[1100px]">
        <img
          className="static select-none left-auto md:rotate-0 rotate-[60deg]  opacity-80 bottom-auto overflow-hidden min-w-[1000px] mr-0 pt-0"
          src="/images/blurBG.png"
          alt="bg"
        />
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="relative z-40 "
      >
        <h1 className="font-poppins text-gray text-[42px] sm:text-[70px] md:text-[80px] sm:leading-[70px] md:leading-[90px] cursor-default font-medium leading-[50px]">
          A freelance front-end engineer with a strong focus on interfaces and experiences.{' '}
        </h1>
      </motion.div>
      <AnimatePresence>
        <Tooltip
          placement="right"
          label="Let's work together!"
          className="text-[#62656D] bg-white shadow-md hidden sm:block p-2 rounded-lg border-gradient"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="z-40 border-gradient relative flex cursor-pointer items-center text-[#62656D] space-x-2 mt-6 text-sm md:text-lg bg-white shadow-md p-2 rounded-lg w-fit"
          >
            <p>Currently available for work</p>
            <motion.div animate={{ y: [1, -1] }} transition={{ repeat: Infinity, repeatType: 'reverse' }}>
              <span className="w-5 h-5 text-gradient">✓</span>
            </motion.div>
          </motion.div>
        </Tooltip>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-40 px-5 py-4 mt-4 text-sm font-semibold text-white border-2 border-transparent border-solid rounded-lg shadow-md md:py-5 md:px-10 md:mt-12 md:text-lg w-fit bg-gray"
          >
            View Work
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Hero;
