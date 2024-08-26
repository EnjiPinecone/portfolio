import { CypressIcon, ExpressIcon, FigmaIcon, GitIcon, JavascriptIcon, MongoIcon, NestIcon, NextIcon, NodeIcon, PostgresIcon, ReactIcon, SassIcon, SocketIcon, StorybookIcon, TailwindIcon, TypescriptIcon } from "./Icons";
import SkillBox from "./SkillBox";

export default function Skills() {
  return (
    <div id="testimonials" className="py-24 px-8 flex flex-col items-center">
        <span className=" bg-gray-200 dark:bg-gray-700  px-5 py-1 rounded-2xl text-gray-600 dark:text-gray-300 mb-4">Skills</span>
        <p className="text-gray-600 dark:text-gray-300 md:text-xl text-lg mb-12">The skills, tools and technologies I am really good at:</p>
        <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 justify-between gap-12">
          <SkillBox icon={<JavascriptIcon />} text={"Javascript"} />
          <SkillBox icon={<TypescriptIcon />} text={"Typescript"} />
          <SkillBox icon={<ReactIcon />} text={"React"} />
          <SkillBox icon={<NextIcon />} text={"Next.js"} />
          <SkillBox icon={<NodeIcon />} text={"Node.js"} />
          <SkillBox icon={<NestIcon />} text={"Nest.js"} />
          <SkillBox icon={<ExpressIcon />} text={"Express.js"} />
          <SkillBox icon={<SocketIcon />} text={"Socket.io"} />
          <SkillBox icon={<PostgresIcon />} text={"PostgresSQL"} />
          <SkillBox icon={<MongoIcon />} text={"MongoDB"} />
          <SkillBox icon={<SassIcon />} text={"Sass/Scss"} />
          <SkillBox icon={<TailwindIcon />} text={"Tailwindcss"} />
          <SkillBox icon={<FigmaIcon />} text={"Figma"} />
          <SkillBox icon={<CypressIcon />} text={"Cypress"} />
          <SkillBox icon={<StorybookIcon />} text={"Storybook"} />
          <SkillBox icon={<GitIcon />} text={"Git"} />

        </div>
    </div>
  )
}
