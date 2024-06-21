import React from "react";
import styled from "styled-components";

interface DrawerButtonProps {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  isOpen: boolean;
  onClick?: () => void;
}

const Button = styled.button<{ active?: boolean; isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.isOpen ? "100%" : "50px")};
  padding: ${(props) => (props.isOpen ? "10px 20px" : "10px")};
  justify-content: ${(props) => (props.isOpen ? "flex-start" : "center")};
  background-color: ${(props) => (props.active ? "#D9FDDF" : "transparent")};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition:
    background-color 0.3s,
    width 0.3s,
    padding 0.3s;
  border-radius: 10px;
  margin-top: 2px;
  margin-bottom: 2px;

  &:hover {
    background-color: #f1fff3;
  }

  &:active {
    background-color: #e9ffec;
  }
`;

const IconContainer = styled.div<{ isOpen: boolean }>`
  margin-right: ${(props) => (props.isOpen ? "15px" : "0")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Label = styled.span<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  white-space: nowrap;
  overflow: hidden;
`;

const DrawerButton: React.FC<DrawerButtonProps> = ({
  icon,
  label,
  active,
  isOpen,
  onClick,
}) => {
  return (
    <Button active={active} onClick={onClick} isOpen={isOpen}>
      <IconContainer isOpen={isOpen}>{icon}</IconContainer>
      <Label isOpen={isOpen}>{label}</Label>
    </Button>
  );
};

export default DrawerButton;
