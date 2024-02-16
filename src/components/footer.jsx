import { BsGithub , BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className=" h-full flex items-center md:flex-row flex-col justify-between lg:px-44 mt-32">
      <div className=" md:w-[50%] w-[95%] flex flex-col mb-10 bg-white bg-opacity-40 rounded-3xl px-10 pb-7 pt-5 ">
        <p className=" pb-5 font-semibold text-3xl"> Juljan Biçi</p>
        <p className=" font-light "> A Web Developer, crafting captivating websites with a perfect blend of creativity and technical expertise with tons of desire for knowloge.</p>
        <p className=" mt-4 font-medium">© 2021 Juljan Biçi</p>
      </div>
      <div className=" flex flex-col mb-10 w-[19rem] bg-white bg-opacity-40 px-10 py-5 rounded-3xl gap-10">
        <ul className=" flex flex-col">
          <a className=" text-lg pb-1 font-medium">Find me in</a>
          <a href="https://github.com/JuljanBici" target="blank" className=" font-light py-1 flex items-center gap-5 hover:text-[#851f1f] transition-[0.3s]">Github <BsGithub /></a>
          <a href="https://www.linkedin.com/in/juljan-bici-4aa488277/" target="blank" className=" font-light py-1 flex items-center gap-5 hover:text-blue-400 transition-[0.3s]">LinkedIn<BsLinkedin /> </a>
          <a href="https://www.instagram.com/julbici/" target="blank" className=" font-light py-1 flex items-center gap-5 hover:text-[#d62976] transition-[0.3s]">Instagram <BsInstagram /></a>
        </ul> 
        <Link to='/contact' className=" bg-zinc-800 text-white font-light rounded-full h-[32px] inline-flex items-center overflow-hidden w-auto max-w-[32px] hover:cursor-pointer" id="button">
          <span id="icon"><FiMail /></span>
          <span id="text">Or contact me here</span>
        </Link>
      </div>
    </div>
  )
}

export default footer
