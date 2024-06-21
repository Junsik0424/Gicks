import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

// 메인 컨테이너 스타일
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  height: 100vh;
  padding: 0;
`;

// 로고 이미지 스타일
const StyledImg = styled.img`
  width: 186px;
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

// 버튼 스타일
const StyledButton = styled.button`
  background-color: #60ce72;
  border: none;
  color: white;
  padding: 15px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  max-width: 430px;
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

// 입력 필드 스타일
const StyledInput = styled.input`
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  width: 400px;
  max-width: 400px;
  height: 50px;
  padding: 0 15px;
  margin-bottom: 15px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #60ce72;
    box-shadow: 0 0 10px rgba(96, 206, 114, 0.2);
  }
`;

// 텍스트 스타일
const StyledP = styled.p`
  width: 100%;
  max-width: 400px;
  margin: 0 0 10px;
  font-size: 16px;
  color: #333;
`;

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [department, setDepartment] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (String(password).length < 6) {
      alert("비밀번호는 6자 이상이어야 합니다.");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        {
          name: name,
          studentId: studentId,
          password: password,
          major: department,
        },
      );
      if (response.status === 201) {
        alert("회원가입이 완료되었습니다.");
        window.location.href = "/login";
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (e) {
      console.log(e);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <StyledContainer>
      <a href="/">
        <StyledImg src="src/assets/logo.svg" alt="로고" />
      </a>
      <div>
        <StyledP>이름</StyledP>
        <StyledInput
          type="text"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <StyledP>학번</StyledP>
        <StyledInput
          type="text"
          placeholder="학번을 입력하세요"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      </div>
      <div>
        <StyledP>비밀번호</StyledP>
        <StyledInput
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <StyledP>비밀번호 확인</StyledP>
        <StyledInput
          type="password"
          placeholder="비밀번호를 다시 한 번 입력하세요"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>
      <div>
        <StyledP>소속 학과</StyledP>
        <StyledInput
          type="text"
          placeholder="예) 전기전자컴퓨터공학부"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <StyledButton onClick={handleSignUp}>회원가입</StyledButton>
    </StyledContainer>
  );
};

export default SignUpPage;
