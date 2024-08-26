import { CopyRight } from "./Icons";


export default function Footer() {
  return (
    <div className="flex items-center justify-center gap-2 py-6 w-full md:max-w-[1200px]">
        <CopyRight />
        <p className="text-sm text-gray-600 dark:text-gray-300  ">2024 | Greetings with ❤️️ from Ulaanbaatar</p>
    </div>
  )
}
