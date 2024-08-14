import Image from "next/image";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <div className="py-24 px-8 grid grid-cols-2 gap-12">
      <div>
        <h1 className=" text-gray-900 text-6xl font-bold mb-2">Hi, I’m Enji 👋</h1>
        <p className=" text-gray-600 text-[16px] mb-12">I specialize in full stack development, particularly with React.js and Node.js.
        My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.</p>
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#4B5563" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4B5563" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span className=" text-gray-600 text-[16px]"> Ulaanbaatar, Mongolia </span>
        </div>
        <div className="flex items-center gap-2 mb-12">
          <div className=" w-6 h-6 grid place-content-center">
            <div className=" bg-emerald-500 w-2 h-2 rounded-full"></div>
          </div>
          
          <span className=" text-gray-600 text-[16px]">Available for new projects</span>
        </div>
        <SocialIcons />
      </div>
      <div className="flex justify-end">
        <div className="relative w-full h-full">
          <img src="./profile.jpeg" className=" h-[320px] w-[280px] absolute object-cover right-8 top-0 z-20 border-8 border-white" />
          <div className=" h-[320px] w-[280px] absolute object-cover right-0 bottom-0 bg-gray-200 z-10"></div>
        </div>
      </div>
    </div>
  )
}
