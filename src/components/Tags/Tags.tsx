import React, { useState } from "react";
import styled from "styled-components";

import TagButton from "./TagsButton";

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 6px;
`;

const tags = ["전체", "스터디", "택시", "공동구매", "배달"];

const Tags: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("전체");

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <TagContainer>
      {tags.map((tag) => (
        <TagButton
          key={tag}
          label={tag}
          selected={selectedTag === tag}
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </TagContainer>
  );
};

export default Tags;
