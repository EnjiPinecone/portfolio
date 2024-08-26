import Projects from "./Projects";

export default function Work() {
  return (
    <div id="work" className="py-24 px-8 flex flex-col items-center">
        <span className=" bg-gray-200 dark:bg-gray-700 px-5 py-1 rounded-2xl text-gray-600 dark:text-gray-300 mb-4">Work</span>
        <p className="text-gray-600 dark:text-gray-300 md:text-xl text-lg font-light mb-12">Some of the noteworthy projects I have built:</p>
        <Projects />
    </div>
    )
}
