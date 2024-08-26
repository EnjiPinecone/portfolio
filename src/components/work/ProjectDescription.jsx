import LinkIcon from "./LinkIcon";
import UsedTech from "./UsedTech";

export default function ProjectDescription({projectTitle, projectDescription, link , className }) {
  return (
    <div className={`${className} p-12 flex flex-col gap-6 dark:bg-gray-800`}>
        <p className="text-gray-900 dark:text-gray-200 font-medium md:text-xl text-lg">{projectTitle}</p>
        <p className="text-gray-600 dark:text-gray-300 leading-7 font-light">{projectDescription}</p>
        <div className="flex gap-2 flex-wrap">
            <UsedTech text={"React"}/>
            <UsedTech text={"Next.js"}/>
            <UsedTech text={"Typescript"}/>
            <UsedTech text={"Next.js"}/>
            <UsedTech text={"PostgreSQL"}/>
            <UsedTech text={"Tailwindcss"}/>
            <UsedTech text={"Figma"}/>
            <UsedTech text={"Cypress"}/>
            <UsedTech text={"Storybook"}/>
            <UsedTech text={"Git"}/>
        </div>
        <a href={link} className="p-2">
            <LinkIcon />
        </a>
    </div>
  )
}
