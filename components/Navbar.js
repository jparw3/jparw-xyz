import Link from 'next/link';
import React, { useState } from 'react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed top-0 z-50 w-full "
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div className="relative px-5 flex items-center  justify-between h-full py-[25px]">
        <div className="z-50">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                <div className="hidden md:block text-lg font-medium text-[#1A1B1F] font-poppins">Jack Willars</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                <div className="block md:hidden text-lg font-medium text-[#1A1B1F] font-poppins">JW</div>
              </motion.div>
            </div>
          </Link>
        </div>
        <div className="items-center hidden text-base font-semibold md:flex space-x-9">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
            About
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
            Contact
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
            Blog
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 cursor-pointer py-3 text-white bg-[#1A1B1F] rounded-lg"
          >
            View Work
          </motion.div>
        </div>

        <motion.div
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
          whileHover={{ scale: 0.975 }}
          whileTap={{ scale: 1.05 }}
          className="z-50 block md:hidden"
        >
          {!menuIsOpen ? (
            <MenuAlt3Icon className="w-5 h-5 transition-all cursor-pointer text-gray hover:text-zinc-500" />
          ) : (
            <XIcon className="w-5 h-5 transition-all cursor-pointer text-gray hover:text-zinc-500" />
          )}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            className="absolute top-0 z-40 flex flex-col justify-center w-full overflow-y-hidden text-center bg-white bg-opacity-50 shadow-md md:hidden backdrop-blur-sm"
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ stiffness: 100 }}
          >
            <div className="flex pt-16 text-[#1A1B1F] flex-col py-5 mx-auto space-y-3">
              <div>About</div>
              <div>Contact</div>
              <div>Blog</div>
              <div>Not-work area</div>
              <div className="bg-[#1A1B1F] w-fit mx-auto text-white py-2 px-6 rounded-lg">View Work</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
