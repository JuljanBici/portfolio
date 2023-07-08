import { FaReact , FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai"
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss , SiFirebase  } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import { BsGit , BsGithub } from "react-icons/bs";
import { LuMonitorSmartphone } from "react-icons/lu";
import me from '../images/me.jpeg'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';



const skills = [
  {
    id:1,
    name:"HTML",
    description:"Strong proficiency in HTML, leveraging its versatile structure and semantic elements to create well-structured and accessible web pages.",
    img: <AiFillHtml5 className="text-[7rem] text-orange-500 bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
  {
    id:2,
    name:"CSS",
    description:"Extensive experience in CSS, skillfully applying styles, layouts, and animations to enhance the visual appeal and interactivity of web designs.",
    img: <FaCss3Alt className="text-[7rem] text-blue-400 bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
  {
    id:3,
    name:"JavaScript",
    description:"Proficiency in JavaScript, enabling me to create dynamic and interactive web applications with smooth functionality and seamless user experiences.",
    img: <IoLogoJavascript className="text-[7rem] bg-yellow-500 flex w-full py-5" />
  },
  {
    id:4,
    name:"React",
    description:"Extensive experience in ReactJS, allowing me to build powerful and responsive web applications with reusable components, efficient state management, and seamless routing for a seamless user experience.",
    img: <FaReact className="text-[7rem] bg-white dark:bg-black dark:bg-opacity-70 text-blue-400 flex w-full py-5" />
  },
  {
    id:5,
    name:"TailwindCSS",
    description:"Expertise in Tailwind CSS, enabling me to swiftly design and style websites by leveraging its utility classes and responsive grid system for visually appealing and responsive user interfaces.",
    img: <SiTailwindcss className="text-[7rem] text-sky-400 bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
  {
    id:6,
    name:"Firebase",
    description:"With experience in Firebase, I can seamlessly integrate authentication, real-time data storage, and cloud functions into web applications, ensuring secure and efficient user experiences.",
    img: <SiFirebase className="text-[7rem] text-yellow-400 bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
  {
    id:7,
    name:"UI/UX",
    description:"With a strong focus on UI/UX design principles, I create intuitive and visually appealing user interfaces that enhance the overall user experience.",
    img: <MdArchitecture className="text-[7rem] bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
  {
    id:8,
    name:"Git",
    description:"Proficient in Git, I utilize version control to manage code repositories, collaborate with team members, and ensure efficient code management throughout the development process.",
    img: <BsGit className="text-[7rem] text-red-500 bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
  {
    id:9,
    name:"GitHub",
    description:"Experienced in GitHub, I leverage its powerful features to host and showcase my projects, collaborate with other developers, and contribute to open-source repositories.",
    img: <BsGithub className="text-[7rem] text-red-900 bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
  {
    id:9,
    name:"Responsive Design",
    description:"I specialize in creating responsive designs that adapt seamlessly to different screen sizes and devices, ensuring optimal user experience across desktop, tablet, and mobile platforms.",
    img: <LuMonitorSmartphone className="text-[7rem] bg-white dark:bg-black dark:bg-opacity-70 flex w-full py-5" />
  },
]

const About = () => {

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
<div className="h-full relative">
  <div className="md:absolute z-30 flex pt-10 items-center justify-center md:top-48 md:left-28 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
    <motion.img 
      className="md:h-[30rem] h-[25rem] rounded-3xl object-right" src={me} 
      ref={scrollRef}
      initial={{ opacity: 0, x: 0}}
      animate={project}
      transition={{type: 'spring', duration: 2, delay:0}}
      />
  </div>
  <div className="md:absolute z-20 flex flex-col md:pt-[30vh] pt-7 items-center px-6 md:pl-[20rem] md:pr-[5rem] justify-center">
    <motion.p 
      className="flex border-b-2 mb-3 w-full pb-4 text-4xl font-extrabold border-zinc-900 dark:border-white"
      ref={scrollRef}
      initial={{ opacity: 0, x: -100}}
      animate={project}
      transition={{type: 'spring', duration: 3, delay:0.6}}
      >
      Get to know me.
    </motion.p>
    <motion.p 
      className="text-lg font-light pt-2"
      ref={scrollRef}
      initial={{ opacity: 0, x: -100}}
      animate={project}
      transition={{type: 'spring', duration: 3, delay:0.6}}
      >
      I&apos;m <span className="font-bold text-orange-700">Juljan</span>, a Front-End focused Web Developer living in Tirana, Albania. For over a year, I&apos;ve been honing my programming and web development skills to create visually captivating websites, driven by my childhood curiosity and passion for aesthetics. With a keen eye for beauty, I continue to explore the vast possibilities of the web using various tools and technologies.
    </motion.p>
  </div>
      <p className=" font-[vollkorn] fixed md:block hidden right-[-40px] top-20 opacity-20 dark:opacity-5 text-white font-extrabold text-[12rem]">About.</p>
      <div className="md:block hidden" id="down-arrow"></div>
      <div className='grid w-full relative h-full grid-cols-1 md:mt-[100vh] mt-10 px-10'>
        <div className="flex flex-col justify-center items-center">
          <p className="w-full md:w-[60%] py-9 md:flex top-0 text-2xl">Various skills learned, developed and used on my projects.</p>
          <div className="grid items-center mt-18 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-6 xl:grid-cols-4 xl:gap-9">
            {skills.map((skill) => {
              return(
              <div key={skill.id} className="w-[13rem] z-10 group h-[17rem] relative rounded overflow-hidden shadow-lg">
              {skill.img}
              <div className="px-6 z-10 absolute bg-white bg-opacity-30 backdrop-blur-sm w-full h-full transform duration-500 inset-y-[41.1%] group-hover:-inset-y-0 py-4">
                <div className="font-bold text-xl mb-1 ">{skill.name}</div>
                <p className=" font-light text-sm">
                  {skill.description}
                </p>
              </div>
              </div>
            )})}
        </div>
      </div>
    </div>
      <p className="md:pl-[7rem] md:pr-[17rem] px-7 pt-16 font-semibold text-lg">· I am actively seeking job opportunities where I can make meaningful contributions, grow my knowledge, and continue to progress. If you have a opportunity that aligns with my skills and expertise, I would be delighted to hear from you. Feel free to reach out and connect ·</p>
    </div>
  )
}

export default About