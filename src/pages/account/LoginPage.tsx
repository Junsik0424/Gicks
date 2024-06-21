import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 186px;
  height: 60;
  margin-bottom: 50px;
`;

const StyledInput = styled.input`
  border-color: #d0d0d0;
  border-radius: 6px;
  width: 400px;
  height: 50px;
  text-align: center;
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
const StyledP = styled.p`
  margin: 0;
  padding: 0;
  color: #60ce72;
`;
const StyledBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 26%;
`;
const StyledLink = styled.a`
  text-decoration: none;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <StyledInput
        type="email"
        placeholder="ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton onClick={handleLogin}>Login</StyledButton>
      {error && <p>{error}</p>}
      <StyledBottomContainer>
        <p>아직 계정이 없으신건가요? </p>
        <StyledLink href="http://localhost:3000/signup">
          <StyledP>회원가입</StyledP>
        </StyledLink>
      </StyledBottomContainer>
    </StyledContainer>
  );
};

export default LoginPage;
