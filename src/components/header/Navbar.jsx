import DownloadButton from "./DownloadButton";
import Menu from "./Menu";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="hidden md:flex items-center justify-between gap-6">
      <Menu />
      <div className=" h-4 border border-gray-400"></div>
      <div className="flex items-center justify-between gap-6">
        <ThemeSwitcher />
        <DownloadButton />
      </div>
    </div>
  )
}
