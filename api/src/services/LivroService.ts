import fs from "fs";
import path from "path";
import { Livro } from "../shared/types";

const dbPath = path.join(__dirname, "../db/dbLivros.json");

export const getTodosOsLivros = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8")) as Livro[];
};

export const createOrChangeLivro = (livros: Livro[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(livros));
};
