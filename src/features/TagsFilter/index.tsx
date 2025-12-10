import { AVAILABLE_TAGS } from "./constants/Filters";
import Tag from "./components/Tag";

const TagsFilter: React.FC = () => {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      <span className="text-center w-full text-sm font-semibold mb-2">
        Filter by tag:
      </span>
      {Object.entries(AVAILABLE_TAGS).map(([tag, className]) => {
        const copyClassName = [...className];
        return <Tag key={tag} tag={tag} colors={copyClassName} />;
      })}
    </div>
  );
};
export default TagsFilter;
