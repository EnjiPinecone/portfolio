import Summary from "./Summary";

export default function Experience() {
  return (
    <div className="py-24 px-8 flex flex-col items-center w-full md:max-w-[1200px]">
        <span className=" bg-gray-200 dark:bg-gray-700 px-5 py-1 rounded-2xl text-gray-600 dark:text-gray-300 mb-4">Experience</span>
        <p className="text-gray-600 dark:text-gray-300 md:text-xl text-lg font-light mb-12 text-center">Here is a quick summary of my most recent experiences:</p>
        <Summary />
    </div>
  )
}
