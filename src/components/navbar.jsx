import { FaSun , FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbar = ({darkMode, toggleDarkMode}) => {

  return (
    <div className="flex fixed top-0 left-0 right-0 h-[7rem] w-full py-6 items-center justify-center z-50 ">
      <ul className="flex sm:text-base text-sm bg-white bg-opacity-10 backdrop-blur-xl rounded-full md:px-4 px-3 py-3">
        <Link to='/' className=" md:px-8 sm:px-4 px-2 py-2 hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm hover:cursor-pointer  transition-[.6s] rounded-3xl">Work</Link>
        <Link to='/about' className=" md:px-8 sm:px-4 px-2 py-2 hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm hover:cursor-pointer transition-[.6s] rounded-3xl">About</Link>
        <Link to='/contact' className=" md:px-8 sm:px-4 px-2 py-2 hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-sm hover:cursor-pointer transition-[.6s] rounded-3xl">Contact</Link>
      </ul>
      {darkMode 
      ? <FaSun onClick={toggleDarkMode} className="absolute right-5 md:right-14 sm:top-10 top-11  text-lg hover:top-[2.35rem] duration-100"/>
      : <FaMoon onClick={toggleDarkMode} className="absolute right-5 md:right-14 sm:top-10 top-11  text-lg hover:top-[2.35rem] duration-100"/> }
      
    </div>
  )
}

export default navbar