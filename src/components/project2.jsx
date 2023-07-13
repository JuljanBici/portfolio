import { FaReact } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import chatTrickMain from '../images/chatTrickChatGrain.jpg'
import chatTrickSec from '../images/chatTrickImagesGrain.jpg'
import chatTrickThird from '../images/chatTrickLogin.jpg'
import chatTrickForth from '../images/chatTrickUserGrain.jpg'
import chatTrickFifth from '../images/chatTrickMainGrain.jpg'
import chatTrickSixth from '../images/chatTrickMessagesGrain.jpg'

const ChatApp = () => {

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
    <div className=" w-full overflow-hidden flex flex-col items-center justify-center">
      <a href='https://chat-trick.vercel.app/' target="blank" className=" text-[4rem] font-bold ">
        ChatTrick.
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
        </motion.div >
        <motion.div 
          className=" flex flex-col items-center"
          ref={scrollRef}
          initial={{ opacity: 1, x: -100}}
          animate={project}
          transition={{type: 'spring', duration: 2, delay:0.3}}
        >
          <div className="lg:px-32 px-14 py-2 rounded-3xl bg-white bg-opacity-20">
            <p className=" font-medium">Role</p>
            <p className=" font-light">Product designer &</p>
            <p className=" font-light">Developer</p>
          </div>
        </motion.div >
        <motion.div 
          className=" flex flex-col md:items-end items-center"
          ref={scrollRef}
          initial={{ opacity: 1, x: -100}}
          animate={project}
          transition={{type: 'spring', duration: 2, delay:0.6}}
          >
          <div className="lg:px-32 px-4 py-2 rounded-3xl bg-white bg-opacity-20">
            <p className=" font-medium">Technologies <span className=" font-light text-xs"> (based on importance)</span></p>
            <p className="flex items-center gap-4 font-light">Firebase <DiFirebase className=" text-2xl" /></p>
            <p className="flex items-center gap-4 font-light">React JS <FaReact /></p>
            <p className="flex items-center gap-4 font-light">Tailwind CSS <SiTailwindcss /></p>
          </div>
        </motion.div >
      </div>
      <div className=" mt-14 flex md:flex-row flex-col justify-center w-full gap-8">
        <div className="flex flex-col items-center">
          <a href='https://chat-trick.vercel.app/' target="blank" className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[140%] object-cover object-bottom" style={{ position: 'absolute', bottom: -90 }} src={chatTrickMain} />
              <div className="px-6 z-10 absolute bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[85%] py-4">
                <div className="font-bold text-xl mb-1 ">ChatTrick.</div>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[30rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={chatTrickThird} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-40%] py-4">
                <p className="md:text-xl text-[1.11rem] pt-4">Powered by React JS, my chat app offers real-time communication and dynamic updates, enabling users to <span className=" text-sky-500">connect</span> and exchange messages effortlessly. With React Router Dom, seamless page transitions enhance the overall navigation experience, ensuring a smooth flow across the application.</p>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={chatTrickFifth} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-20%] py-4">
                <p className="md:text-xl text-[1.05rem] pt-4">The integration of Firebase and Firebase Firestore provides <span className=" text-sky-500">secure</span> authentication, safeguarding user data and ensuring a safe environment for communication. These technologies also enhance the app&apos;s functionality, enabling features such as real-time chat updates and efficient message storage.</p>
              </div>
            </div>
          </a>
        </div>
        <div className=" flex flex-col items-center">
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[140%] object-cover object-bottom" style={{ position: 'absolute', bottom: -140 }} src={chatTrickSec} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[85%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-10%] py-4">
                <div className="font-bold text-xl mb-1 ">The Progress</div>
                <p className="md:text-xl text-[1.05rem] pt-4">Introducing my professional-grade chat application, developed using React JS, React Router Dom, Tailwind CSS, Firebase, and Firebase Firestore. This solution combines seamless functionality, responsive design, and secure authentication to deliver an exceptional user experience.</p>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[23rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[140%] object-cover object-bottom" style={{ position: 'absolute', bottom: -140 }} src={chatTrickForth} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-20%] py-4">
                <p className="md:text-xl text-[1.05rem] pt-4">The utilization of Tailwind CSS ensures a visually appealing and <span className=" text-sky-500">responsive</span> design, making the chat app accessible and enjoyable on various devices and platforms. The challenge of structuring the app&apos;s functionality was successfully addressed, resulting in a streamlined user interface and optimal performance for all users.</p>
              </div>
            </div>
          </a>
          <a href="https://gadget-alb.vercel.app/" target="blank" className=" mb-6 z-10 group h-[30rem] relative rounded overflow-hidden shadow-lg w-[18rem] lg:w-[30rem] md:w-[20rem] sm:w-[20rem]">
            <div style={{ position: 'relative', height: '100%' }}>
              <img className="w-full h-[120%] object-cover object-bottom" style={{ position: 'absolute', bottom: -60 }} src={chatTrickSixth} />
              <div className="px-6 z-10 absolute backdrop-blur-sm bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-40 w-full h-full transform duration-500 inset-y-[95%] group-hover:-inset-y-[0%] md:group-hover:-inset-y-[-50%] py-4">
                <p className="md:text-xl text-[1.05rem] pt-4">Experience the pleasure of <span className=" text-sky-500">fast</span> and pleasing communication with my professionally developed chat app. Seamlessly connect with others, enjoy an intuitive user interface, and revel in the speed and efficiency of my advanced solution.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChatApp