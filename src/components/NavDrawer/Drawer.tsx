import React, { useState } from "react";
import ArrowIcon from "src/assets/icons/arrow.svg";
import BuyingIcon from "src/assets/icons/buying.svg";
import ChatIcon from "src/assets/icons/chat.svg";
import HomeIcon from "src/assets/icons/home.svg";
import OthersIcon from "src/assets/icons/others.svg";
import StudyIcon from "src/assets/icons/study.svg";
import TaxiIcon from "src/assets/icons/taxi.svg";
import WriteIcon from "src/assets/icons/write.svg";
import LogoIcon from "src/assets/logo.svg";
import styled from "styled-components";

import DrawerButton from "./DrawerButton";

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  top: 0;
  left: 0;
  min-width: ${(props) => (props.isOpen ? "250px" : "60px")};
  height: 100vh;
  background-color: transparent;
  overflow-x: hidden;
  transition: width 0.3s;
  z-index: 1000;
`;

const DrawerContent = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isOpen ? "flex-start" : "center")};
  padding: ${(props) => (props.isOpen ? "30px 15px" : "30px 10px")};
  font-size: 22px;
  color: #323232;
  transition: all 0.3s;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const ArrowIconWrapper = styled.div<{ isOpen: boolean }>`
  margin-left: auto;
  cursor: pointer;
  z-index: 1001;
  width: 40px;
  height: 40px;
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.3s;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin-top: 9px;
  margin-bottom: 9px;
`;

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<string>("home");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <>
      <DrawerContainer isOpen={isOpen}>
        <DrawerContent isOpen={isOpen}>
          <LogoWrapper>
            <LogoIcon />
            <ArrowIconWrapper isOpen={isOpen} onClick={toggleDrawer}>
              <ArrowIcon />
            </ArrowIconWrapper>
          </LogoWrapper>
          <DrawerButton
            icon={<HomeIcon />}
            label="홈"
            active={activeItem === "home"}
            isOpen={isOpen}
            onClick={() => handleButtonClick("home")}
          />
          <Divider />
          <DrawerButton
            icon={<StudyIcon />}
            label="스터디"
            active={activeItem === "study"}
            isOpen={isOpen}
            onClick={() => handleButtonClick("study")}
          />
          <DrawerButton
            icon={<TaxiIcon />}
            label="택시"
            active={activeItem === "taxi"}
            isOpen={isOpen}
            onClick={() => handleButtonClick("taxi")}
          />
          <DrawerButton
            icon={<BuyingIcon />}
            label="공동구매"
            active={activeItem === "buying"}
            isOpen={isOpen}
            onClick={() => handleButtonClick("buying")}
          />
          <DrawerButton
            icon={<OthersIcon />}
            label="기타"
            active={activeItem === "others"}
            isOpen={isOpen}
            onClick={() => handleButtonClick("others")}
          />
          <Divider />
          <DrawerButton
            icon={<ChatIcon />}
            label="채팅방"
            active={activeItem === "chat"}
            isOpen={isOpen}
            onClick={() => handleButtonClick("chat")}
          />
          <Divider />
          <DrawerButton
            icon={<WriteIcon />}
            label="모집 글 작성"
            active={activeItem === "write"}
            isOpen={isOpen}
            onClick={() => handleButtonClick("write")}
          />
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
