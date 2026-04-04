import styled from "styled-components";
import { lancamentos } from "./dadosLancamentos";

const LancamentosContainer = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 span,
  p {
    color: blue;
    font-size: 35px;
    background: lightgreen;
  }

  .container-livro {
    display: flex;
    justify-content: space-around;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      cursor: pointer;

      img {
        height: 9rem;
      }

      p {
        font-size: larger;
        font-weight: bold;
      }
    }
  }
`;

function UltimosLancamentos() {
  return (
    <LancamentosContainer>
      <h2>
        <span>Últimos lançamentos</span>
      </h2>

      <div className="container-livro">
        {lancamentos.map((livro) => {
          return (
            <div>
              <img src={livro.src} />
            </div>
          );
        })}
      </div>
    </LancamentosContainer>
  );
}

export default UltimosLancamentos;
