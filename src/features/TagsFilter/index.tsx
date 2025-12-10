import { AVAILABLE_TAGS } from "@features/TagsFilter/constants/Filters";
import Tag from "@features/TagsFilter/components/Tag";
import { TagKey } from "./types/filters";

const TagsFilter: React.FC = () => {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      <span className="text-center w-full text-sm font-semibold mb-2">
        Filter by tag:
      </span>
      {Object.entries(AVAILABLE_TAGS).map(([tag]) => {
        return <Tag key={tag} tag={tag as TagKey} />;
      })}
    </div>
  );
};
export default TagsFilter;
