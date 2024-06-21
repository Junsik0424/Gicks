import styled from "styled-components";

const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomePage = () => {
  return (
    <Home>
      <h1>Home Page</h1>
    </Home>
  );
};

export default HomePage;
