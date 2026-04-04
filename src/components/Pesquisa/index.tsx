import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { dbLivros } from "./dadosPesquisa";
import type { Livro } from "../../types";

const PesquisaContainer = styled.section`
  min-height: 18rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h4 {
    color: white;
  }
`;

const Titulo = styled.h2`
  color: white;
  font-size: 4rem;
`;

const Subtitulo = styled.h3`
  color: mintcream;
  font-size: 2.5rem;
`;

const ResultadoBusca = styled.div`
  margin-top: 1.25rem;
  padding: 0.25rem;
  padding-right: 0.9rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 7rem;
  }

  &:hover {
    background-color: fuchsia;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState<Livro[]>([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro aqui:</Subtitulo>
      <Input
        type="text"
        placeholder="Pesquise..."
        onBlur={(evento) => {
          const tituloPesquisado = evento.target.value;
          const livrosRetornados = dbLivros.filter((livro) => {
            return livro.nome.toLowerCase().includes(tituloPesquisado.toLowerCase());
          });
          console.log("livrosRetornados:", livrosRetornados);
          setLivrosPesquisados(livrosRetornados);
        }}
      />
      {livrosPesquisados.map((livro) => {
        return (
          <ResultadoBusca>
            <img src={livro.src} />
            <h4>Título: {livro.nome}</h4>
          </ResultadoBusca>
        );
      })}
    </PesquisaContainer>
  );
}

export default Pesquisa;
