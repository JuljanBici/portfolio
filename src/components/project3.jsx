import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import gadgetAlbMain from '../images/gadgetAlbBestGrain.jpg'
import gadgetAlbSec from '../images/gadgetAlbBest.jpg'
import gadgetAlbThird from '../images/gadgetAlbFullGrain.jpg'
import gadgetAlbForth from '../images/gadgetAlbLogin.jpg'
import gadgetAlbFifth from '../images/gadgetAlbMainGrain.jpg'
import gadgetAlbSixth from '../images/meCoding.jpeg'

const RestoGrand = () => {

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
        RestoGrand.
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
            <p className="flex items-center gap-4 font-light">Tailwind CSS <SiTailwindcss /></p>
            <p className="flex items-center gap-4 font-light">JavaScript <IoLogoJavascript className=" text-xl" /></p>
          </div>
        </motion.div>
      </div>
      <div className=" mt-14 flex md:flex-row flex-col justify-center w-full gap-8">
        <div className=" flex flex-col items-center">
          <a href="https://restogrand.vercel.app/" target="blank" className="mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img src={gadgetAlbMain} className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} />
              <div className="px-6 z-10 absolute bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[85%] py-4">
                <div className="font-bold text-xl mb-1">RestoGrand</div>
              </div>
            </div>
          </a>
          <div className=" mb-6 z-10 group h-[30rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={gadgetAlbThird} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-50%] py-4">
                <p className="text-xl font-bold"></p>
                <p className="md:text-xl text-[1.1rem] pt-4">Seamless navigation is at the heart of RestoGrand. Its intuitive design, powered by the fusion of ReactJS and TailwindCSS, guides users effortlessly. Whether on a desktop or mobile, the website adapts seamlessly, ensuring a consistent journey through the virtual culinary world.</p>
              </div>
            </div>
          </div>
          <div className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={gadgetAlbFifth} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-30%] py-4">
                <p className="md:text-xl text-[1.05rem] pt-4">Framer Motion and React Router DOM unite seamlessly on RestoGrand, transforming simple clicks into a symphony of elegant transitions. This dynamic interplay enhances user engagement, offering a digital dining escapade like no other.</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-full object-cover object-bottom" style={{ position: 'absolute', bottom: 0 }} src={gadgetAlbSec} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[85%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-20%] py-4">
                <div className="font-bold text-xl mb-1 ">The beginning</div>
                <p className="md:text-xl text-[1.1rem] pt-4">RestoGrand is more than a restaurant website; it's a gallery of design finesse. Crafted using ReactJS and TailwindCSS, it's a canvas where every element, color, and image contributes to an artistic masterpiece. The result? An immersive online experience that mirrors the sophistication of fine dining.</p>
              </div>
            </div>
          </div>
          <div className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={gadgetAlbForth} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-20%] py-4">
                <p className="md:text-xl text-[1.01rem] pt-4">RestoGrand is a digital testament to culinary artistry and design ingenuity. Its sections unfold like courses in a gourmet meal, captivating users with each scroll. This isn't just a website; it's a realm where technology and creativity intertwine to redefine how we experience both food and design.</p>
              </div>
            </div>
          </div>
          <div className="mb-6 z-10 group h-[30rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-full object-cover object-right" src={gadgetAlbSixth} style={{ position: 'absolute', bottom: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestoGrand