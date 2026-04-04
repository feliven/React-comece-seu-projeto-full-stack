import type { CSSProperties } from "react";
import styled from "styled-components";

interface TituloProps {
  $cor?: CSSProperties["color"];
  $tamanhoFonte?: CSSProperties["fontSize"];
}

const Titulo = styled.p<TituloProps>`
  color: ${(props) => props.$cor || "blue"};
  font-size: ${(props) => props.$tamanhoFonte || "35px"};
  background: lightgreen;
  font-size: large;
  font-weight: 600;
`;

export default Titulo;
