import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/components/modeToggleTheme";
import prisma from "@/lib/prisma";

export default async function Home() {
  
  await prisma
  return (
    <div className="m-4">
      <h1>Home Page Content</h1>
    </div>
  );
}
