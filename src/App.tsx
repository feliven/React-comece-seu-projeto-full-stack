import styled from "styled-components";
import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";

const AppContainer = styled.div`
  background-image: linear-gradient(45deg, blue, chartreuse);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <UltimosLancamentos />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
