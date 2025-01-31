import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop,  } from "./NavbarDesktop";


export function Navbar() {
  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <NavbarDesktop />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </nav>
  );
}