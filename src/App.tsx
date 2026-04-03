import styled from "styled-components";
import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(45deg, blue, chartreuse);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
