'use client'

import React from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'

const IntroductionSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 mt-3">
        <div className="col-span-7">
          <h1 className="text-white mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">
            {"Hello, I'm Pingpong"}
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque delectus doloribus, explicabo facilis laborum
            minima nemo perspiciatis quae tenetur? Ab amet aut beatae earum in neque placeat! Inventore, repellendus.
          </p>
          <motion.button
            className="bg-indigo-600 text-white text-base p-2 rounded-md w-40 lg:w-56 mt-5 lg:mt-6"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95
            }}
          >
            Hire Me!!
          </motion.button>
        </div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <Image
            src="/images/introduction.jpg"
            alt="intro-image"
            className="rounded-full"
            width={250}
            height={250}
            sizes="(max-width: 300px)"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;