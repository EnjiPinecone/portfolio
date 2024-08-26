export default function SkillBox({icon, text}) {
  return (
    <div className="flex flex-col items-center gap-4">
      {icon}
      <p className="text-gray-600 dark:text-gray-300 md:text-lg  text-base">{text}</p>
    </div>
  )
}
