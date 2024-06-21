import React from "react";
import styled from "styled-components";

interface TagButtonProps {
  selected: boolean;
  onClick: () => void;
  label: string;
}

const StyledButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "black" : "#e0e0e0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => (props.selected ? "black" : "#d4d4d4")};
  }
`;

const TagButton: React.FC<TagButtonProps> = ({ selected, onClick, label }) => {
  return (
    <StyledButton selected={selected} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default TagButton;
