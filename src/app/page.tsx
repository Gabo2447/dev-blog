import Hero from "@features/Home/components/hero";
import TagsFilter from "@features/TagsFilter";
import CardList from "@features/Blog/components/cardList";
import { CardData } from "@features/Blog/types/CardList";

const CARDS: CardData[] = [
  {
    id: "1",
    tags: ["frontend", "backend"],
    footer: "24 oct 2023",
    title: "Work with Multiple GitHub Account",
    description:
      "Learn how to work with multiple GitHub accounts on the same computer in an agile way.",
  },
  {
    id: "2",
    tags: ["git", "productivity"],
    footer: "24 oct 2023",
    title: "Work with Multiple GitHub Account",
    description:
      "Learn how to work with multiple GitHub accounts on the same computer in an agile way.",
  },
];

export default function Page() {
  return (
    <main className="w-full mx-auto p-4 sm:p-8 mb-16 flex-1 gap-16">
      <Hero />
      <main className="my-6 sm:my-12">
        <TagsFilter />
      </main>
      <CardList cards={CARDS} />
    </main>
  );
}
