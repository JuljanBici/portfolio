import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

function Contact() {

  const project = useAnimation();
  const [scrollRef, scrollInView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (scrollInView) {
      project.start({ opacity: 1, y: 0});
    } else {
      project.start({ opacity: 0, y: -50});
    }
  }, [scrollInView, project]);

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gxtgr5q', 'template_hcdk6aq', form.current, 'eYZsO9dMjjjc0ww4u')
      .then((result) => {
          console.log(result.text);
          alert('Message sent succesfully')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="h-screen overflow-hidden w-full md:mb-0 mb-[10rem]">
      <p className=" font-[vollkorn] md:block hidden fixed left-[-40px] top-5 opacity-20 text-white dark:opacity-5 font-extrabold text-[10rem]">Contact.</p>
      <section className=" pt-44 absolute flex md:flex-row flex-col gap-24 w-full" >
        <div className=" md:w-[40%] w-[90%] pr-9 md:pl-20 pl-10">
          <motion.p 
            className=" font-semibold text-3xl pb-2"
            ref={scrollRef}
            initial={{ opacity: 0, y: -50}}
            animate={project}
            transition={{type: 'spring', duration: 3, delay:0.3}}
            >
            Have an exciting project you need help with?
          </motion.p>
          <motion.p 
            className="mb-8 lg:mb-16 font-light sm:text-xl"
            ref={scrollRef}
            initial={{ opacity: 0, y: 20}}
            animate={project}
            transition={{type: 'spring', duration: 3, delay:0.3}}
            >
            Send me an email or contact me via instant message!
          </motion.p>
          <a href="mailto:julianbici14@gmail.com" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">julianbici14@gmail.com</span>
          </a>
        </div>
        <div className=" pl-10 pr-14 pb-20 md:w-[50%] w-[90%]">
          <p className="font-light pb-2 sm:text-xl">Get in touch or shoot me an email directly. </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8 ">
              <div className="z-30">
                <input name='from_email' type="email" id="email" className="shadow-sm bg-transparent border border-gray-400 text-gray-900 dark:text-white text-sm rounded-lg placeholder:text-zinc-900 dark:placeholder:text-white focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none block w-full p-2.5 " placeholder="Email" required />
              </div>
              <div className="z-30">
                  <input name='from_subject' type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 dark:text-white bg-transparent rounded-lg border border-gray-400 shadow-sm placeholder:text-zinc-900 dark:placeholder:text-white focus:ring-primary-500 focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none" placeholder="Name" required />
              </div>
              <div className="sm:col-span-2 z-30">
                  <textarea name='message' rows="6" className=" resize-none block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-transparent rounded-lg shadow-sm border border-gray-400 placeholder:text-zinc-900 dark:placeholder:text-white focus:bg-white dark:focus:bg-black dark:focus:bg-opacity-20 focus:bg-opacity-20 focus:outline-none" placeholder="Message"></textarea>
              </div>
              <button type='submit' value='Send' className=" z-50 flex items-center justify-between rounded-2xl bg-[#1C1C1E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 duration-200 hover:cursor-pointer active:duration-75">
                Send
              </button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact