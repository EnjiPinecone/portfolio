import Header from '@/components/header/Index'
import About from '@/components/about/Index'
import Hero from '@/components/hero/Index'
export default function Home() {
  return (
    <main className='bg-white text-black px-20'>
      <Header />
      <Hero />
      <About />
    </main>
  );
}
