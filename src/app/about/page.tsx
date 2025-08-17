import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";

const AboutPage = () => {
  return (
    <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton>
           <Button>
            Sing in
           </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  );
};

export default AboutPage;
