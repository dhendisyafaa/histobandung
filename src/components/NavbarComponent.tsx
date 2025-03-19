import Link from "next/link";
import { ModeToggle } from "./ModeToogle";
import NavigationMenuNavbar from "./NavigationMenu";

export default function NavbarComponent() {
  return (
    <div className="w-full z-50" data-aos="fade-down">
      <div className="flex mx-auto mt-5 items-center max-w-[95vw] md:max-w-[80vw] min-w-72 justify-between border p-2 sm:px-6 rounded-full shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <p className="uppercase text-sm sm:text-base lg:text-xl font-bold text-primary">
            Histobandung
          </p>
        </Link>
        <div className="flex items-center gap-1">
          <NavigationMenuNavbar />
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
