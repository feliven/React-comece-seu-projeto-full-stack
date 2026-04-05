import { Link } from "react-router-dom";
import styled from "styled-components";

const OpcoesHeaderContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style-type: none;
  li {
    cursor: pointer;
  }
`;

const listaOpcoes = [
  { nome: "Categorias", rota: "categorias" },
  { nome: "Minha estante", rota: "minha-estante" },
  { nome: "Favoritos", rota: "favoritos" },
];

function OpcoesHeader(): React.JSX.Element {
  return (
    <OpcoesHeaderContainer>
      {listaOpcoes.map((opcao) => (
        <li key={opcao.nome}>
          <Link to={`/${opcao.rota}`}>
            <p>{opcao.nome}</p>
          </Link>
        </li>
      ))}
    </OpcoesHeaderContainer>
  );
}

export default OpcoesHeader;
