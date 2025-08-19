import Link from "next/link";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/acitons/user.actions";
const Navbar = async () => {
  const user = await currentUser();
  if (user) await syncUser();
  return (
    <nav className="stiky text-4xl top-0 w-fyll border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Socially
            </Link>
          </div>
          <DesktopNavBar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
