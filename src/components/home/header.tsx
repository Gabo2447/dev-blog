import Link from "next/link";
import { CornerRightUp, Github } from "lucide-react";
import { Button } from "../ui/button";

const header = () => {
  return (
    <header className="bg-background/50 backdrop-blur-sm sticky top-0 py-px">
      <div className="my-3 container mx-auto px-8 sm:px-18 items-center flex justify-between">
        <Link href={"/"} className="underline-effect">
          <h2 className="font-bold text-xl sm:text-2xl">Dev Blog</h2>
        </Link>
        <nav className="flex gap-x-2">
          <Link href="/about">
            <Button variant={"outline"} className="button-jump">
              About
              <CornerRightUp />
            </Button>
          </Link>
          <Link
            href={"https://github.com/Gabo2447/dev-blog"}
            target="_blank"
            type="nooreferer noopener"
          >
            <Button variant={"outline"} className="button-jump">
              <Github />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default header;
