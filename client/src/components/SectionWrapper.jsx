import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import MotionWrap from "./MotionWrap";
import sectionImg from "../assets/imgs/anhbia.jpg";

const SectionWrapper = ({ positions }) => {
  const scrollRef = useRef(null);

  return (
    <div ref={scrollRef} className="container bg-slate-400">
      <section className="overflow-hidden block h-500 relative w-full">
        <motion.div className="absolute top-0 left-0 right-0 bottom-0 m-0 z-10">
          <picture>
            {/* <source
              srcSet={sectionImg}
              className="object-cover h-full w-full"
            /> */}
            <motion.img
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 3 }}
              viewport={{ once: false, amount: 0.25 }}
              className="object-cover h-full w-full"
              src={sectionImg}
              alt=""
            />
          </picture>
        </motion.div>
        <div className="absolute top-0 left-0 right-0 bottom-0 m-0 z-20">
          <div className="container h-full">
            <div className="relative h-full p-6">
              <div className="flex flex-wrap items-center justify-start text-center text-white h-full">
                <div className="w-5/12 items-center">
                  <div className="mb-3 text-base font-bold uppercase tracking-widest">
                    OUR MOST REMARKABLE <br /> NEW COLLECTION
                  </div>
                  <h1 className="mb-4 text-5xl tracking-widest font-light">
                    INTRODUCING POLANCO
                  </h1>
                  <button className="border rounded-sm border-white text-white text-sm uppercase min-w-210 font-bold px-2 py-3 hover:bg-white hover:text-black transition duration-300 ease-in-out">
                    Shop ngay!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper;
