import Link from "next/link";
import { Book } from "lucide-react";
import { Button } from "../ui/button";
import Section from "../global/section";

const hero = () => {
  return (
    <Section className="my-16 text-center flex flex-col items-center">
      <h1 className="font-bold text-3xl sm:text-6xl text-wrap my-2 text-blue-50">
        Web Dev and Design
      </h1>
      <p className="text-lg">
        {"I'm"}{" "}
        <span className="underline decoration-wavy text-blue-200">Gabriel</span>{" "}
        and I talk about technology, programming, and personal experiences
      </p>
      <Link href="/blog">
        <Button className="button-jump my-8" variant={"default"}>
          <Book /> Read Articles
        </Button>
      </Link>
    </Section>
  );
};

export default hero;
