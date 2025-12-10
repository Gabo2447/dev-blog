import { AVAILABLE_TAGS } from "@features/TagsFilter/constants/Filters";

export type AvailableTagsType = typeof AVAILABLE_TAGS;
export type TagKey = keyof AvailableTagsType;
