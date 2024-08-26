import Image from "next/image";
import SocialIcons from "./SocialIcons";
import {useTheme} from "next-themes";

export default function Hero() {
  return (
    <div className="py-24 px-8 grid md:grid-cols-2 grid-cols-1 gap-12">

        <div className="relative  md:hidden  w-60 h-[280px] place-self-center">
          <img src="./profile.jpeg" className=" w-60 h-[280px]  absolute object-cover z-20 border-8 left-1/2 transform -translate-x-1/2 border-white dark:border-black" />
          <div className=" w-[260px] h-[265px] absolute object-cover top-6  bg-gray-200 dark:bg-gray-700 left-1/2 transform -translate-x-1/2 z-10"></div>
        </div>
      <div>
        <h1 className=" text-gray-900 dark:text-gray-50 md:text-6xl text-4xl font-bold mb-2">Hi, I’m Enji 👋</h1>
        <p className=" text-gray-600 dark:text-gray-300 text-[16px] mb-12">I specialize in full stack development, particularly with React.js and Node.js.
        My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.</p>
        <div className="flex items-center gap-2 mb-2">
          
          <svg xmlns="http://www.w3.org/2000/svg" className="dark:hidden md:w-8 md:h-8 w-6 h-6 ml-1" viewBox="0 0 32 32" fill="none">
            <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" className="hidden dark:block md:w-8 md:h-8 w-6 h-6 ml-1" viewBox="0 0 32 32" fill="none">
            <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className=" text-gray-600 dark:text-gray-300 text-[16px]"> Ulaanbaatar, Mongolia </span>
        </div>
        <div className="flex items-center gap-2 mb-12">
          <div className=" w-6 h-6 grid place-content-center">
            <div className=" bg-emerald-500 w-2 h-2 rounded-full"></div>
          </div>
          
          <span className=" text-gray-600 dark:text-gray-300 text-[16px]">Available for new projects</span>
        </div>
        <SocialIcons />
      </div>
      <div className="md:flex justify-end hidden">
        <div className="relative w-full h-full">
          <img src="./profile.jpeg" className=" md:h-[320px] md:w-[280px]  absolute object-cover right-8 top-0 z-20 border-8 border-white dark:border-black" />
          <div className=" md:h-[320px] md:w-[280px] absolute object-cover right-0 top-10 bg-gray-200 dark:bg-gray-700 z-10"></div>
        </div>
      </div>
    </div>
  )
}
