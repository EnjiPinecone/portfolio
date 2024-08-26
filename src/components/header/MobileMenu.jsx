import Link from "next/link";
import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import DownloadButton from "./DownloadButton";
import { useState } from "react";


export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    const handleClick = (state) => {
        setOpen(state)
    }

  return (
    <div className="md:hidden">
        <button onClick={() => handleClick(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 6H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 18H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        {open && <div className="absolute flex bg-gray-100  w-full h-full left-0 top-0 z-40">
            <div className="w-16"></div>
            <div className="bg-white dark:bg-gray-950 grow p-4">
                <div className="flex justify-between items-center pb-2">
                    <Logo />
                    <button onClick={() => handleClick(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    
                </div>
                    <div className='flex flex-col gap-4 py-4 text-gray-600 dark:text-white border-t-2 border-b-2'>
                        <Link href='#about' onClick={() => handleClick(false)}>About</Link>
                        <Link href='#work' onClick={() => handleClick(false)}>Work</Link>
                        <Link href='#testimonials' onClick={() => handleClick(false)}>Testimonials</Link>
                        <Link href='#contact' onClick={() => handleClick(false)}>Contact</Link>
                    </div>
                    <div className="flex flex-col justify-between  text-gray-600 gap-4">
                        <div className="flex items-center justify-between gap-4 mt-4">
                        <span className="text-gray-500 dark:text-white">Switch Theme</span>
                        <ThemeSwitcher />
                        </div>
                    <DownloadButton />
                    </div>
            </div>
        </div>}
    </div>
  )
}
