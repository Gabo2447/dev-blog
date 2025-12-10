import { TagKey } from "@features/TagsFilter/types/filters";

export interface CardData {
  title: string;
  footer: string;
  description: string;
  tags: TagKey[];
  id: string | number;
}

export interface CardListProps {
  cards: CardData[];
}
