import Link from "next/link";
import { Book } from "lucide-react";

import { Button } from "../ui/button";
import Section from "../global/section";
import Title from "../global/title";

const hero = () => {
  return (
    <Section className="my-46 text-center flex flex-col items-center">
      <Title className="font-bold text-3xl sm:text-6xl text-wrap my-2 text-blue-50">
        Web Dev and Design
      </Title>
      <p className="text-lg text-">
        I&apos;m Gabriel and I talk about technology, programming, and personal
        experiences
      </p>

      <Link href="/blog" target="_self">
        <Button className="button-jump my-8" variant={"default"}>
          <Book />
          Read Articles
        </Button>
      </Link>
    </Section>
  );
};

export default hero;
