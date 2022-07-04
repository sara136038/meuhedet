import React from "react";
import { SearchTagsList, SearchTag, SearchTagContent } from "./header.style";

const SearchTags = ({ tags }) => {
  return (
    <SearchTagsList>
      {tags.map((tag) => (
        <SearchTag key={tag}>
          <SearchTagContent>{tag}</SearchTagContent>
        </SearchTag>
      ))}
    </SearchTagsList>
  );
};

export default SearchTags;
