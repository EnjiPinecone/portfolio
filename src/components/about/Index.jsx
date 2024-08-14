
export default function About() {
  return (
    <div className="py-24 px-8 grid grid-cols-2 gap-12">
      <div className=" col-span-2 flex justify-center">
        <span className=" bg-gray-200 px-5 py-1 rounded-2xl text-gray-600">About me</span>
      </div>
      <div className="flex">
        <div className="relative w-full h-full">
          <img src="./profile.jpeg" className=" h-[480px] w-[400px] absolute object-cover left-8 top-0 z-20 border-8 border-white" />
          <div className=" h-[480px] w-[400px] absolute object-cover left-0 top-8 bg-gray-200 z-10"></div>
        </div>
      </div>
      
      <div>
        <h1 className=" text-gray-900 text-3xl font-bold mb-6">Curious about me? Here you have it:</h1>
        <div className=" space-y-4 text-gray-600 text-[16px]">
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
