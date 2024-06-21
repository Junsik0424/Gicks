import React from "react";
import PersonIcon from "src/assets/icons/person.svg";
import ProfileIcon from "src/assets/icons/profile.svg";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 0px 15px;
  margin: 0;
  margin-left: 0;
  flex: 1 1 calc(33.333% - 40px);
  box-sizing: border-box;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const Author = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 800;
  margin: 0;
  margin-bottom: 10px;
  min-height: 2.4em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
`;

const RemainingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

interface CardProps {
  uuid: string;
  title: string;
  content: string;
  body: string;
  remaining: string;
  time: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  uuid,
  title,
  content,
  remaining,
  time,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick} key={uuid}>
      <ProfileContainer>
        <ProfileIcon />
        <Author>{title}</Author>
      </ProfileContainer>
      <CardTitle>{content}</CardTitle>
      <BottomContainer>
        <RemainingContainer>
          <PersonIcon />
          <p>{remaining}</p>
        </RemainingContainer>
        <p style={{ color: "#B0B0B0" }}>{time}</p>
      </BottomContainer>
    </CardContainer>
  );
};

export default Card;
