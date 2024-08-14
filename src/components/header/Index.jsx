import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex w-full justify-between items-center my-4 px-8">
      <Logo />
      <Navbar />
    </div>
  )
}
