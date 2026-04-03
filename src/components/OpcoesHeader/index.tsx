import styled from "styled-components";

const OpcoesHeaderContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style-type: none;
  li {
    cursor: pointer;
  }
`;

const listaOpcoes = ["Categorias", "Minha estante", "Favoritos"];

function OpcoesHeader(): React.JSX.Element {
  return (
    <OpcoesHeaderContainer>
      {listaOpcoes.map((opcao) => (
        <li>
          <p>{opcao}</p>
        </li>
      ))}
    </OpcoesHeaderContainer>
  );
}

export default OpcoesHeader;
