import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { Livro } from "../shared/types";

const dbPath = path.join(__dirname, "../db/dbLivros.json");

export const getLivros = (req: Request, res: Response) => {
  try {
    const dbLivros: Livro[] = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    res.status(200).json(dbLivros);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send(`An unexpected error occurred: ${error as string}`);
    }
  }
};

export const postLivro = (req: Request, res: Response) => {
  try {
    const dbLivros: Livro[] = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    const novoLivro: Livro = req.body;

    const dbLivrosAtualizado = [novoLivro, ...dbLivros];
    fs.writeFileSync(dbPath, JSON.stringify(dbLivrosAtualizado));

    res.status(201).json(dbLivrosAtualizado);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send(`An unexpected error occurred: ${error as string}`);
    }
  }
};

export const putLivro = (req: Request<Livro>, res: Response) => {
  try {
    const dbLivros: Livro[] = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    const livroAtualizado: Livro = req.body;
    const indexLivroParaAtualizar = dbLivros.findIndex((livro) => livro.id === livroAtualizado.id);

    dbLivros[indexLivroParaAtualizar] = { ...livroAtualizado };
    fs.writeFileSync(dbPath, JSON.stringify(dbLivros));

    res.status(201).json(dbLivros);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send(`An unexpected error occurred: ${error as string}`);
    }
  }
};
export const deleteLivro = (req: Request<{ id: string }>, res: Response) => {
  try {
    const dbLivros: Livro[] = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    const { id } = req.body;
    if (!id) {
      res.status(400).json({ message: "ID é obrigatório" });
      return;
    }

    const indexLivroParaRemover = dbLivros.findIndex((livro) => livro.id === Number(id));
    if (indexLivroParaRemover === -1) {
      res.status(404).json({ message: "Livro não encontrado" });
      return;
    }

    dbLivros.splice(indexLivroParaRemover, 1);
    // fs.writeFileSync(dbPath, JSON.stringify(dbLivros));

    res.status(200).json(dbLivros);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send(`An unexpected error occurred: ${error as string}`);
    }
  }
};
