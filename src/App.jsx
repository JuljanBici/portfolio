import {Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "./components/navbar"
import Work from "./components/work"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Error from './components/error';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
  setDarkMode(darkMode ? false : true )
  }

  return (
    //mos harro me vendos background-animate 
      <div className='bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 dark:bg-gradient-to-b text- dark:from-gray-900 dark:via-purple-950 dark:to-violet-900 text-zinc-800 dark:text-white flex flex-col transition-[0.5s] w-full items-center'>
        <div>
          <div id="wave"></div>
          <div id="wave"></div>
          <div id="wave"></div>
        </div>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App