import { UpworkIcon } from "./UpworkIcon";

export default function SummaryBox({jobTitle, responsibilities, date}) {
    return (
      <div  className="grid md:grid-cols-3 grid-cols-1 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md gap-12 w-full lg:max-w-[896px]">
        <UpworkIcon />
        <span className="inline md:hidden md:justify-self-end text-gray-700 dark:text-gray-300 text-lg font-light">{date}</span>
        <div className="hidden md:block">
            <p className="text-gray-900 dark:text-white text-xl mb-4 font-medium leading-7">{jobTitle}</p>
            <ul className="text-gray-600 dark:text-gray-300 text-l list-outside list-disc ml-4 space-y-2">
                {responsibilities.map((text, idx) => <li key={idx} >{text}</li>)}
            </ul>
        </div>
        <span className="hidden md:inline justify-self-end text-gray-700 text-lg font-light">{date}</span>
        <div className="block md:hidden">
            <p className="text-gray-900 dark:text-white text-xl mb-4 font-medium leading-7">{jobTitle}</p>
            <ul className="text-gray-600 dark:text-gray-300 text-l list-outside list-disc ml-4 space-y-2">
                {responsibilities.map((text, idx) => <li key={idx} >{text}</li>)}
            </ul>
        </div>
      </div>
    )
  }
  