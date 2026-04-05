import styled from "styled-components";
import Pesquisa from "../components/Pesquisa";

const FavoritosContainer = styled.div`
  background-image: linear-gradient(45deg, blue, chartreuse);
`;

function Favoritos() {
  return (
    <FavoritosContainer>
      <Pesquisa />
    </FavoritosContainer>
  );
}

export default Favoritos;
