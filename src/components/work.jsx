import { FaLaptopCode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import AlbTech from "./project1";
import ChatApp from "./project2";
import RestoGrand from "./project3";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const Work = () => {

  const project = useAnimation();
  const [scrollRef, scrollInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (scrollInView) {
      project.start({ opacity: 1, x: 0});
    } else {
      project.start({ opacity: 0, x: -100});
    }
  }, [scrollInView, project]);

  return (
      <div className=" flex w-screen overflow-hidden relative flex-col items-center justify-center pt-36">
      <motion.h1 
        className="text-[45px] flex md:ml-0 ml-[12rem] font-extrabold whitespace-nowrap overflow-hidden relative w-[560px]" 
        initial={{ opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 2, delay:0.3}}
      >
        <span className=" text-[45px] ml-[60px] md:block hidden font-semibold">Hi.</span>
        <span className=" text-[45px] font-semibold">I&apos;m</span>
        <div id="message" className=" bg-white bg-opacity-30 block font-bold overflow-hidden absolute pl-2 top-1 md:left-[200px] left-[80px]">
          <div id="word1">Juljan</div>
          <div id="word2">a WebDev</div>
          <div id="word3">self-taught</div>
        </div>
      </motion.h1>
      <FaLaptopCode className="absolute md:block hidden text-4xl  rotate-[26deg] top-44 right-20 xl:right-32 md:right-16"/>
      <motion.p 
        className="lg:w-[60%] md:w-[80%] sm:w-[80%] w-[80%] text-xl pt-10 xl:w-[60%]"
        initial={{ opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', duration: 2, delay:0.3 }}
      >
        I&apos;m a self-taught <span className=" text-orange-600">Web Developer</span> ,who brings ideas to life by creating beautiful and functional websites, merging design and coding to deliver impactful digital experiences in my portfolio where creativity and technology collide.
      </motion.p>
      <span id="scroll-btn" className="block pt-24">
          <a>
            <span id="mouse">
              <span>
              </span>
            </span>
          </a>
          <p id="scrollit">scroll me</p>
        </span>
      <div 
        className=" flex relative flex-col items-center mt-[9rem]"
        >
        <FaCss3Alt className="absolute text-4xl  rotate-[-26deg] top-0 left-0 md:left-20" />
        <motion.p 
          className=" font-semibold py-2 px-5 text-5xl"
          ref={scrollRef}
          initial={{ opacity: 0, x: -100}}
          animate={project}
          transition={{type: 'spring', duration: 2, delay:0}}
        >
          PROJECTS
        </motion.p>
        <motion.p 
          className="text-xl pt-5 font-light lg:w-[45rem] md:w-[35rem] w-[80%]"
          ref={scrollRef}
          initial={{ opacity: 0, x: -100}}
          animate={project}
          transition={{type: 'spring', duration: 2, delay:0}}
        >
          Below you will find some of my personal projects, each one explained in depth.
        </motion.p >
      </div>
      <div className=" pt-[8rem] flex items-center justify-center w-full">
        <AlbTech />
      </div>
      <div className=" pt-[8rem] flex items-center justify-center w-full">
        <ChatApp />
      </div>
      <div className=" pt-[8rem] flex items-center justify-center w-full">
        <RestoGrand />
      </div>
      <section className="pt-32">
        <div className="py-8 flex flex-col items-center mx-auto max-w-screen-md text-center">
            <svg className="mx-auto mb-4 w-12 h-12 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
            <h1 className="mb-4 lg:text-5xl md:text-3xl text-2xl font-bold">Under Construction</h1>
            <p className="font-light w-[80%] lg:text-lg md:text-md sm:w-full text-md">Until other projects are added, why don&apos;t take a look on the other pages.</p>
        </div>
      </section>
    </div>
  )
}

export default Work
