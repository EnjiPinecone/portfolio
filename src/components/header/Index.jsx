import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex w-full justify-between items-center my-4 px-8">
      <Logo />
      <Navbar />
      <MobileMenu />
    </div>
  )
}
