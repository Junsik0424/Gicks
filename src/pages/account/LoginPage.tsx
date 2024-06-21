import axios from "axios";
import React, { useState } from "react";
import Logo from "src/assets/logo.svg";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 0;
`;

const LogoContainer = styled.div`
  height: auto;
  margin-bottom: 30px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledInput = styled.input<{ isTop: boolean }>`
  border: 1px solid #d0d0d0;
  border-radius: ${(props) =>
    props.isTop ? "10px 10px 0 0" : "0 0 10px 10px"};
  width: 400px;
  height: 50px;
  text-align: center;
  font-size: 16px;
  padding: 0 15px;
  margin-bottom: ${(props) => (props.isTop ? "0" : "15px")};
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border: 1px solid #60ce72;
    box-shadow: 0 0 10px rgba(96, 206, 114, 0.2);
  }
`;

const StyledButton = styled.button`
  background-color: #60ce72;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 10px;
  width: 430px;
  height: 50px;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.02);
  }

  &:active {
    background-color: #3a8b40;
    transform: scale(1);
  }
`;

const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 430px;
`;

const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  color: #60ce72;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #45a049;
  }
`;

const LoginPage = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        {
          loginId: studentId,
          password,
        },
      );
      console.log(response.data);
      if (response.status === 201) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        window.location.href = "/";
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (e) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <StyledContainer>
      <a href="/">
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </a>
      <StyledInput
        isTop={true}
        type="id"
        placeholder="학번"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <StyledInput
        isTop={false}
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton onClick={handleLogin}>로그인</StyledButton>
      <StyledBottomContainer>
        <p>계정이 없으신가요?</p>
        <StyledLink href="/signup">회원가입</StyledLink>
      </StyledBottomContainer>
    </StyledContainer>
  );
};

export default LoginPage;
