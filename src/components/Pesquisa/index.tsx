import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import type { Livro } from "../../shared/types";
import { getLivros } from "../../services/livro-service";

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
  background-color: fuchsia;
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
    background-color: darkmagenta;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState<Livro[]>([]);
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    const fetchLivros = async () => {
      const livrosApi: Livro[] = await getLivros();
      setLivros(livrosApi);
    };

    void fetchLivros();
  }, []);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro aqui:</Subtitulo>
      <Input
        type="text"
        placeholder="Pesquise..."
        onBlur={(evento) => {
          const tituloPesquisado = evento.target.value;
          const livrosRetornados = livros.filter((livro) => {
            return livro.title.toLowerCase().includes(tituloPesquisado.toLowerCase());
          });
          console.log("livrosRetornados:", livrosRetornados);
          setLivrosPesquisados(livrosRetornados);
        }}
      />
      {livrosPesquisados.map((livro) => {
        return (
          <ResultadoBusca key={livro.id}>
            <img src={livro.src} />
            <h4>
              {livro.title}
              {livro.author ? `, por ${livro.author}` : null}
            </h4>
          </ResultadoBusca>
        );
      })}
    </PesquisaContainer>
  );
}

export default Pesquisa;
