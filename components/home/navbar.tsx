import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import Image from "next/image";

export default function Navbar({
  setOpenSiderbar,
}: {
  setOpenSiderbar: Function;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // pass as prop or useSession
  const getImage = () => {
    return "https://github.com/unclebay143.png";
  };
  return (
    <nav className='px-5 md:px-20 py-2 text-gray-400 z-20'>
      <div className='flex h-16 items-center justify-between'>
        <section className='flex space-x-1 items-center'>
          <Image
            src='/_static/icons/logo.png'
            width='25'
            height='25'
            alt='LearnEase logo'
          />
          <h1 className='text-2xl hidden md:inline-block text-gray-200'>
            LearnEase
          </h1>
          <span className='p-2 text-green-700 -mt-4 relative right-2'>
            Beta
          </span>
        </section>

        <section>
          <AnimatePresence>
            {isLoggedIn ? (
              <motion.button
                {...FADE_IN_ANIMATION_SETTINGS}
                className='flex items-center rounded text-white text-sm transition-all border border-gray-50 hover:bg-white hover:text-gray-700 border-opacity-40 bg-gray-800 py-1.5 px-5'
                onClick={() => setOpenSiderbar(true)}
              >
                <h3>My Dashboard</h3>
                <Image
                  loader={getImage}
                  src='https://github.com/unclebay143.png'
                  alt='user'
                  width='50'
                  height='50'
                  className='rounded-full w-6 h-6 ml-2'
                />
              </motion.button>
            ) : (
              <motion.button
                {...FADE_IN_ANIMATION_SETTINGS}
                className='rounded text-white text-sm transition-all border border-gray-50 hover:bg-white hover:text-gray-700 border-opacity-40 bg-gray-800 py-1.5 px-5'
              >
                Login
              </motion.button>
            )}
          </AnimatePresence>
        </section>
      </div>
    </nav>
  );
}
