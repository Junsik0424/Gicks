import React from "react";
import styled from "styled-components";

interface LoadingOverlayProps {
  loading: boolean;
}

const LoadingOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(224, 224, 224, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1010;
`;

const LoadingSpinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  position: fixed;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingOverlay = ({ loading }: LoadingOverlayProps) => {
  if (!loading) return null;
  return (
    <LoadingOverlayContainer>
      <LoadingSpinner />
    </LoadingOverlayContainer>
  );
};

export default LoadingOverlay;
