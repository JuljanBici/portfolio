import { FaReact } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import gadgetAlbMain from '../images/gadgetAlbBestGrain.JPG'
import gadgetAlbSec from '../images/gadgetAlbBest.JPG'
import gadgetAlbThird from '../images/gadgetAlbFullGrain.JPG'
import gadgetAlbForth from '../images/gadgetAlbLogin.JPG'
import gadgetAlbFifth from '../images/gadgetAlbMainGrain.JPG'
import gadgetAlbSixth from '../images/meCoding.jpeg'

const AlbTech = () => {

  const controls = useAnimation();
  const project = useAnimation();
  const [scrollRef, scrollInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (scrollInView) {
      controls.start({ opacity: 1, y: -0 });
      project.start({ opacity: 1, x: 0});
    } else {
      controls.start({ opacity: 0, y: -100 });
      project.start({ opacity: 0, x: -100});
    }
  }, [scrollInView, controls, project]);

  return (
    <div className=" w-screen overflow-hidden flex flex-col items-center justify-center">
      <a href="https://gadget-alb.vercel.app/" target="blank" className=" text-[4rem] font-bold ">
        GadgetAlb.
      </a>
      <div className=" text-lg flex flex-col w-full gap-5 pt-16 max-w-[50rem]">
        <motion.div 
          className=" flex flex-col  md:items-start items-center"
          ref={scrollRef}
          initial={{ opacity: 1, x: -100}}
          animate={project}
          transition={{type: 'spring', duration: 2, delay:0}}
          >
          <div className="lg:px-32 px-16 py-2 rounded-3xl bg-white bg-opacity-20">
            <p className=" font-medium">Timeline</p>
            <p className=" font-light">2023 - Present</p>
          </div>
        </motion.div>
        <motion.div 
          className=" flex flex-col items-center"
          ref={scrollRef}
          initial={{ opacity: 1, x: -100}}
          animate={project}
          transition={{type: 'spring', duration: 2, delay:0.3}}
          >
          <div className="lg:px-32 px-16 py-2 rounded-3xl bg-white bg-opacity-20">
            <p className=" font-medium">Role</p>
            <p className=" font-light">Product designer &</p>
            <p className=" font-light">Developer</p>
          </div>
        </motion.div>
        <motion.div 
          className=" flex flex-col md:items-end items-center"
          ref={scrollRef}
          initial={{ opacity: 1, x: -100}}
          animate={project}
          transition={{type: 'spring', duration: 2, delay:0.6}}
          >
          <div className="lg:px-32 px-[4.5rem] py-2 rounded-3xl bg-white bg-opacity-20">
            <p className=" font-medium">Technologies</p>
            <p className="flex items-center gap-4 font-light">React JS <FaReact /></p>
            <p className="flex items-center gap-4 font-light">Firebase <DiFirebase className=" text-2xl" /></p>
            <p className="flex items-center gap-4 font-light">Tailwind CSS <SiTailwindcss /></p>
          </div>
        </motion.div>
      </div>
      <div className=" mt-14 flex md:flex-row flex-col justify-center w-full gap-8">
        <div className=" flex flex-col items-center">
          <a href="https://gadget-alb.vercel.app/" target="blank" className="mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img src={gadgetAlbMain} className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} />
              <div className="px-6 z-10 absolute bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[85%] py-4">
                <div className="font-bold text-xl mb-1">GadgetAlb</div>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[30rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={gadgetAlbThird} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-50%] py-4">
                <p className="text-xl font-bold"></p>
                <p className="md:text-xl text-[1.1rem] pt-4">With React Router Dom, navigating through the site is <span className=" text-orange-600">seamless</span> and intuitive, allowing users to explore various pages effortlessly. The integration of Firebase authentication ensures secure login and signup processes, <span className=" text-orange-600">protecting </span> user data and providing peace of mind.</p>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={gadgetAlbFifth} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-20%] py-4">
                <p className="md:text-xl text-[1.05rem] pt-4">Built with scalability and performance in mind, my e-commerce platform offers a seamless shopping experience, empowering users to explore, engage, and make purchases with ease. Embrace the future of online shopping with my cutting-edge solution, where design, technology, and functionality converge to deliver <span className=" text-orange-600">exceptional</span> value.</p>
              </div>
            </div>
          </a>
        </div>
        <div className=" flex flex-col items-center">
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-full object-cover object-bottom" style={{ position: 'absolute', bottom: 0 }} src={gadgetAlbSec} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[85%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-30%] py-4">
                <div className="font-bold text-xl mb-1 ">The beginning</div>
                <p className="md:text-xl text-[1.1rem] pt-4">Welcome to my advanced e-commerce website, crafted using React JS, Tailwind CSS, and Firebase. My <span className=" text-orange-600">custom</span> design showcases a sleek and modern interface, optimized for exceptional user experience.</p>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={gadgetAlbForth} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-20%] py-4">
                <p className="md:text-xl text-[1.01rem] pt-4">One of the standout features of my website is the <span className=" text-orange-600">robust</span> component ecosystem. Users can easily &apos;like&apos; products, curating a personalized collection that reflects their unique preferences. The <span className=" text-orange-600">intuitive</span> cart system tracks selected items and calculates the total cost, simplifying the checkout process and enhancing user convenience.</p>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className="mb-6 z-10 group h-[30rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-full object-cover object-right" src={gadgetAlbSixth} style={{ position: 'absolute', bottom: 0 }} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AlbTech