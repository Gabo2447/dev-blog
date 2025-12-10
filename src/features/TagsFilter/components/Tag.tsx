"use client";

// >> Imports <<
import Badge from "@feature/TagsFilter/components/Badge";
import { useQueryState } from "nuqs";

// >> Typos <<
interface Props {
  tag: string;
  colors: string[];
}

const Tag: React.FC<Props> = ({ tag, colors }) => {
  const [currentTag, setTag] = useQueryState("tag");
  const isActive = currentTag === tag;

  const activeColor = colors[1];
  const inactiveColor = colors[0];
  const currentColor = isActive ? activeColor : inactiveColor;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTag(isActive ? null : tag);
  };

  return (
    <button onClick={onClickHandler}>
      <Badge className={`${currentColor}`}>{tag}</Badge>
    </button>
  );
};

export default Tag;
