import Header from '@/components/header/Index'
import About from '@/components/about/Index'
import Hero from '@/components/hero/Index'
import Skills from '@/components/skills/Index';
import Experience from '@/components/experience/Index';
import { Inter } from 'next/font/google';
import Work from '@/components/work/Index';
import Contact from '@/components/contact/Index';
import Footer from '@/components/footer/Index';

const inter = Inter({
  subsets: ['latin', 'cyrillic']
})

export default function Home() {
  return (
    <main className={`flex flex-col items-center ${inter.className} relative`}>
      <div className="w-full md:max-w-[1200px]">
        <Header />
        <Hero />
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 w-full flex justify-center  ">
        <About />
      </div>
      <div className="w-full md:max-w-[1200px]">
        <Skills />
      </div>
      <div className="bg-gray-50  dark:bg-gray-900 w-full flex justify-center  ">
        <Experience />
      </div>
      <div className="w-full md:max-w-[1200px]">
        <Work />
        <Contact />
      </div>
      <div className="bg-gray-50  dark:bg-gray-900  w-full flex justify-center  ">
        <Footer />
      </div>
    </main>
  );
}
