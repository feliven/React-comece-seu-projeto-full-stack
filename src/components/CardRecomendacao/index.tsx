import styled from "styled-components";

interface CardRecomendacaoProps {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imgsrc: string | null;
}

const CardRecomendacaoContainer = styled.div`
  color: black;
  display: flex;
  gap: 0.5rem;
  background-color: deepskyblue;
  min-width: 33rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
  justify-content: space-around;
  align-self: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: blue;
    color: white;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    gap: 0.5rem;
  }

  h3,
  h4 {
    font-size: x-large;
    font-weight: normal;
    margin: 0;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  h3 {
    font-weight: bold;
  }

  p {
    font-style: italic;
  }

  img {
    max-width: 7rem;
  }

  button {
    border-style: dotted;
    border-radius: 12px;
    border-color: white;
    background-color: teal;
    color: yellow;
    font-size: large;
    font-weight: bold;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      border-style: ridge;
      background-color: yellow;
      color: teal;
    }
  }
`;

function CardRecomendacao({ titulo, subtitulo, descricao, imgsrc = null }: CardRecomendacaoProps) {
  const imgElement = imgsrc ? <img src={imgsrc} alt="" /> : null;

  return (
    <CardRecomendacaoContainer>
      <div>
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
        <p>{descricao}</p>
      </div>
      <div>
        {imgElement}
        <button>Saiba mais</button>
      </div>
    </CardRecomendacaoContainer>
  );
}

export default CardRecomendacao;
