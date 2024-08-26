
export default function About() {
  return (
    <div id="about" className="py-24 px-8 grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:max-w-[1200px]">
      <div className=" md:col-span-2 flex justify-center">
        <span className=" bg-gray-200 dark:bg-gray-700 px-5 py-1 rounded-2xl text-gray-600 dark:text-gray-100 ">About me</span>
      </div>
  
        <div className="relative md:w-full md:h-full w-[330px] h-[360px] place-self-center">
            <img src="./profile.jpeg" className=" lg:h-[480px] lg:w-[400px] md:w-[320px] md:h-[480px] w-[280px] h-[360px] absolute object-cover md:left-8 md:top-0 z-20 border-8 border-white dark:border-gray-900 left-1/2 transform -translate-x-1/2 md:transform-none" />  
            {/* // left-1/2 transform -translate-x-1/2 Absolute iig yag gollluulna */}
            <div className=" lg:h-[480px] lg:w-[400px] md:w-[320px] md:h-[480px] w-[330px] h-[360px] absolute object-cover md:left-0 md:top-8 top-8 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-gray-700  z-10 md:transform-none">

          </div>

      </div>
      
      <div>
        <h1 className=" text-gray-900 dark:text-gray-50 text-3xl font-semibold mb-6 md:mt-0 mt-8">Curious about me? Here you have it:</h1>
        <div className=" space-y-4 text-gray-600 dark:text-gray-300 text-[16px]">
            <p>I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</p>
            <p>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
            <p>With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</p>
            <p>Finally, some quick bits about me.</p>
            <ul className=" list-disc list-inside grid grid-cols-2 gap-2.5">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
            </ul>
            <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </div>
      </div>
      
    </div>
  )
}
