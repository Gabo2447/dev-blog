import {
  Card,
  CardHeader,
  /**CardAction,*/
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@features/Blog/components/card";

import Badge from "@features/TagsFilter/components/Badge";
import { getColors } from "../../TagsFilter/utils/getColors";
import type { TagKey } from "../../TagsFilter/types/filters";

type Props = {
  children?: React.ReactNode;
  tags: TagKey[] | TagKey;
  title: string;
  footer: string;
  description: string;
};

// >> Componentes <<
const tagsElement = (tagList: TagKey[]) => (
  <div className="flex flex-wrap gap-2 mb-2">
    {tagList.map((tagName) => {
      const [inactiveColor] = getColors({ tag: tagName });

      return (
        // Usamos 'tagName' como key para la lista
        <Badge key={tagName} className={inactiveColor}>
          {tagName}
        </Badge>
      );
    })}
  </div>
);

const cardAssambler: React.FC<Props> = ({
  children,
  tags,
  title,
  footer,
  description,
}) => {
  const tagList = Array.isArray(tags) ? tags : [tags];

  return (
    <Card>
      <CardHeader>{tagsElement(tagList)}</CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardContent>{children}</CardContent>
      <CardFooter className="place-self-end">{footer}</CardFooter>
    </Card>
  );
};

export default cardAssambler;
