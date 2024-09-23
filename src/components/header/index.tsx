
import Navbar from "../nav-bar";
import Presentation from "../presentation";
import Paralaxe from "@/components/paralaxe";

export default function Header() {
  return (
    <header className="relative bg-headbackg pt-5 pb-26 text-white">
      <Paralaxe />
      <div className="relative z-10">
        <Navbar />
        <Presentation />
      </div>
    </header>
  );
}
