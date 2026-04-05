import fs from "fs";
import path from "path";
import { Livro } from "../shared/types";

const dbPath = path.join(__dirname, "../db/dbLivros.json");

export const retornarTodosOsLivros = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8")) as Livro[];
};

const atualizarDbLivros = (livros: Livro[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(livros));
};

export const criarLivro = (novoLivro: Livro) => {
  const dbLivros = retornarTodosOsLivros();
  const indexLivro = dbLivros.findIndex((livro) => livro.id === novoLivro.id);
  if (indexLivro) return false;

  const dbLivrosAtualizado = [novoLivro, ...dbLivros];
  atualizarDbLivros(dbLivrosAtualizado);
  return true;
};

const validarId = (id: string) => {
  const dbLivros = retornarTodosOsLivros();
  const indexLivro = dbLivros.findIndex((livro) => livro.id === Number(id));
  if (indexLivro === -1) return null;

  return { dbLivros, indexLivro };
};

export const retornarLivroPorId = (id: string) => {
  const resultadoValidacao = validarId(id);
  if (!resultadoValidacao) return null;

  const { dbLivros, indexLivro } = resultadoValidacao;
  return dbLivros[indexLivro];
};

export const alterarLivro = (livroAtualizado: Livro) => {
  const resultadoValidacao = validarId(String(livroAtualizado.id));
  if (!resultadoValidacao) return false;

  const { dbLivros, indexLivro } = resultadoValidacao;
  dbLivros[indexLivro] = { ...livroAtualizado };
  atualizarDbLivros(dbLivros);

  return true;
};

export const removerLivro = (id: string) => {
  const resultadoValidacao = validarId(id);
  if (!resultadoValidacao) return false;

  const { dbLivros, indexLivro } = resultadoValidacao;
  dbLivros.splice(indexLivro, 1);
  atualizarDbLivros(dbLivros);

  return true;
};
