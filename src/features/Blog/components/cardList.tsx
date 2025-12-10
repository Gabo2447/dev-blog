"use client";

import * as React from "react";
import { useQueryState, parseAsString } from "nuqs";
import { TagKey } from "@features/TagsFilter/types/filters";
import { CardListProps } from "../types/CardList";
import CardAssambler from "./cardAssambler";

const CardList: React.FC<CardListProps> = ({ cards }) => {
  const [selectedTag] = useQueryState("tag", parseAsString);

  const filteredCards = cards.filter((card) => {
    if (!selectedTag) {
      return true;
    }

    return card.tags.includes(selectedTag as TagKey);
  });

  // TODO: Hacer que el slug funcione
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 sm:gap-8">
      {filteredCards.map((card) => (
        <CardAssambler
          description={card.description}
          footer={card.footer}
          tags={card.tags}
          title={card.title}
          key={card.id}
        ></CardAssambler>
      ))}

      {filteredCards.length === 0 && (
        <div className="text-center col-span-full mt-10">
          <h3 className="text-gray-700 font-semibold text-2xl">
            There are no posts with that tag yet {`:(`}
          </h3>
          <h4 className="text-gray-500 text-xl">More content coming soon!</h4>
        </div>
      )}
    </section>
  );
};

export default CardList;
