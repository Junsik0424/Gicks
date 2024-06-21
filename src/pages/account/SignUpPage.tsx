import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 186px;
  height: 60;
  margin-top: 43%;
`;

const StyledButton = styled.button`
  background-color: #60ce72;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 2%;
  width: 400px;
  height: 50px;

  &:hover {
    background-color: #45a049;
  }
`;
const StyledInput = styled.input`
  color: gray;
  border-color: #d0d0d0;
  border-radius: 6px;
  width: 400px;
  height: 40px;
`;

const StyledP = styled.p`
  margin-bottom: 3px;
  margin-top: 10px;
`;

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [department, setdepartment] = useState("");
  const [studentId, setstudentId] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError(error);
    }
  };

  return (
    <StyledContainer>
      <a href="http://localhost:3000/">
        <StyledImg src="src\assets\logo.svg" />
      </a>
      <div>
        <StyledP>ID</StyledP>
        <StyledInput
          type="email"
          placeholder="ID를 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          type="department"
          placeholder="예) 전기전자컴퓨터공학부"
          value={department}
          onChange={(e) => setdepartment(e.target.value)}
        />
      </div>
      <div>
        <StyledP>학번</StyledP>
        <StyledInput
          type="studentId"
          placeholder="학번을 입력하세요"
          value={studentId}
          onChange={(e) => setstudentId(e.target.value)}
        />
      </div>
      <StyledButton onClick={handleLogin}>회원가입</StyledButton>
      {/* {error && <p>{error}</p>} */}
    </StyledContainer>
  );
};

export default SignUpPage;
