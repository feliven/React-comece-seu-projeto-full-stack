import styled from "styled-components";
import Pesquisa from "../components/Pesquisa";
import UltimosLancamentos from "../components/UltimosLancamentos";
import PesquisaNoUseEffect from "../components/Pesquisa/PesquisaNoUseEffect";

const HomeContainer = styled.div`
  background-image: linear-gradient(45deg, blue, chartreuse);
`;

function Home() {
  return (
    <HomeContainer>
      <UltimosLancamentos />
      <Pesquisa />
      <PesquisaNoUseEffect />
    </HomeContainer>
  );
}

export default Home;
