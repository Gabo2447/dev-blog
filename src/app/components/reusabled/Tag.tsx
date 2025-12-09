"use client";

// >> Imports <<
import Badge from "@app/components/reusabled/Badge";
import { useQueryState } from "nuqs";

// >> Typos <<
interface Props {
  tag: string;
  colors: string[];
}

//! Como se yo que no se va a repetir mas de 2 colores
//! Como se yo que no se van a invertir las posiciones? (Osea con el activo y el no activo)

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
