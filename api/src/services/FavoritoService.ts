import fs from "fs";
import path from "path";
import { Livro } from "../shared/types";

const dbPath = path.join(__dirname, "../db/dbFavoritos.json");
const dbLivrosPath = path.join(__dirname, "../db/dbLivros.json");

export const retornarTodosOsFavoritos = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8")) as Livro[];
};

const atualizarDbFavoritos = (livrosFavoritos: Livro[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(livrosFavoritos));
};

export const criarFavorito = (id: string) => {
  const dbFavoritos = retornarTodosOsFavoritos();
  const indexFavorito = dbFavoritos.findIndex((livro) => livro.id === Number(id));
  if (indexFavorito !== -1) return false;

  const dbLivros = JSON.parse(fs.readFileSync(dbLivrosPath, "utf-8")) as Livro[];
  const indexLivro = dbLivros.findIndex((livro) => livro.id === Number(id));

  if (indexLivro === -1) return false;

  const novoLivroFavorito = dbLivros[indexLivro];

  const dbFavoritosAtualizado = [novoLivroFavorito, ...dbFavoritos];
  atualizarDbFavoritos(dbFavoritosAtualizado);
  return true;
};

const validarId = (id: string) => {
  const dbFavoritos = retornarTodosOsFavoritos();
  const indexLivroFavorito = dbFavoritos.findIndex((livro) => livro.id === Number(id));
  if (indexLivroFavorito === -1) return null;

  return { dbFavoritos, indexLivroFavorito };
};

export const retornarFavoritoPorId = (id: string) => {
  const resultadoValidacao = validarId(id);
  if (!resultadoValidacao) return null;

  const { dbFavoritos, indexLivroFavorito } = resultadoValidacao;
  return dbFavoritos[indexLivroFavorito];
};

// export const alterarFavorito = (livroFavoritoAtualizado: Livro) => {
//   const resultadoValidacao = validarId(String(livroFavoritoAtualizado.id));
//   if (!resultadoValidacao) return false;

//   const { dbFavoritos, indexLivroFavorito } = resultadoValidacao;
//   dbFavoritos[indexLivroFavorito] = { ...livroFavoritoAtualizado };
//   atualizarDbFavoritos(dbFavoritos);

//   return true;
// };

export const removerFavorito = (id: string) => {
  const resultadoValidacao = validarId(id);
  if (!resultadoValidacao) return false;

  const { dbFavoritos, indexLivroFavorito } = resultadoValidacao;
  dbFavoritos.splice(indexLivroFavorito, 1);
  atualizarDbFavoritos(dbFavoritos);

  return true;
};
