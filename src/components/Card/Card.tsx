import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  flex: 1 1 calc(33.333% - 40px); /* Responsive layout for three cards per row */
  box-sizing: border-box;
`;

interface CardProps {
  title: string;
  content: string;
  remaining: string;
  time: string;
}

const Card: React.FC<CardProps> = ({ title, content, remaining, time }) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{remaining}</p>
      <p>{time}</p>
    </CardContainer>
  );
};

export default Card;
