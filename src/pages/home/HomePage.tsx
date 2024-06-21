import Drawer from "src/components/NavDrawer/Drawer";
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
      <Drawer />
    </Home>
  );
};

export default HomePage;
