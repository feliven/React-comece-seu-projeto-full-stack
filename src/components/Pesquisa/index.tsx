import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";

const PesquisaContainer = styled.section`
  height: 50vh;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-around;
`;
const Titulo = styled.h2`
  color: white;
  font-size: 4rem;
`;
const Subtitulo = styled.h3`
  color: mintcream;
  font-size: 2.5rem;
`;

function Pesquisa() {
  const [textoDigitado, setTextoDigitado] = useState("");

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro aqui:</Subtitulo>
      <Input
        type="text"
        placeholder="Pesquise..."
        onBlur={(evento) => {
          console.log(evento.target.value);
          setTextoDigitado(evento.target.value);
        }}
      />
      <h1>{textoDigitado}</h1>
    </PesquisaContainer>
  );
}

export default Pesquisa;
