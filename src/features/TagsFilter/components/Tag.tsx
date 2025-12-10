"use client";

// >> Imports <<
import { getColors } from "../utils/getColors";
import Badge from "@features/TagsFilter/components/Badge";
import { parseAsString, useQueryState } from "nuqs";
import { TagKey } from "../types/filters";
// >> Typos <<
interface Props {
  tag: TagKey;
}

const Tag: React.FC<Props> = ({ tag }) => {
  const [currentTag, setTag] = useQueryState("tag", parseAsString);
  const isActive = currentTag === tag;

  const [inactiveColor, activeColor] = getColors({ tag });
  const currentColor = isActive ? activeColor : inactiveColor;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTag(isActive ? "" : tag);
  };

  return (
    <button onClick={onClickHandler}>
      <Badge className={`${currentColor}`}>{tag}</Badge>
    </button>
  );
};

export default Tag;
