import Link from 'next/link';
import React, { useState } from 'react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <motion.div
      className="relative z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={`stick px-5 flex items-center transition-all duration-200 ${
          menuIsOpen &&
          'bg-white bg-opacity-50 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm'
        } justify-between h-full py-[25px]`}
      >
        <div>
          <Link href="/" passHref>
            <div>
              <div className="hidden md:block text-lg font-medium text-[#1A1B1F] font-poppins">
                Jack Willars
              </div>
              <div className="block md:hidden text-lg font-medium text-[#1A1B1F] font-poppins">
                JW
              </div>
            </div>
          </Link>
        </div>
        <div className="items-center hidden text-base font-semibold md:flex space-x-9">
          <div>About</div>
          <div>Contact</div>
          <div>Blog</div>
          <div className="px-5 py-3 text-white bg-[#1A1B1F] rounded-lg">
            View Work
          </div>
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
            className="absolute z-50 flex flex-col justify-center w-full overflow-y-hidden text-center bg-white bg-opacity-50 shadow-md md:hidden backdrop-blur-sm"
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: 'auto' }}
          >
            <div className="flex text-[#1A1B1F] flex-col py-5 mx-auto space-y-3">
              <div>About</div>
              <div>Contact</div>
              <div>Blog</div>
              <div className="bg-[#1A1B1F] w-fit mx-auto text-white py-2 px-6 rounded-lg">
                View Work
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;
