import styled from "styled-components";
import { lancamentos } from "./dadosLancamentos";
import Titulo from "../Titulo";
import CardRecomendacao from "../CardRecomendacao";
import livro2 from "../../assets/livro2.png";

const LancamentosContainer = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 span {
    color: blue;
    font-size: 35px;
    background: lightgreen;
  }

  .container-livro {
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
    flex-wrap: wrap;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      cursor: pointer;

      img {
        height: 9rem;
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
            <div key={livro.id}>
              <img src={livro.src} />
              <Titulo $cor="crimson" $tamanhoFonte="50px">
                {livro.nome}
              </Titulo>
            </div>
          );
        })}
      </div>
      <CardRecomendacao
        titulo="Talvez você se interesse por..."
        subtitulo="Angular"
        descricao="Construa aplicações com componentes"
        imgsrc={livro2}
      ></CardRecomendacao>
    </LancamentosContainer>
  );
}

export default UltimosLancamentos;
