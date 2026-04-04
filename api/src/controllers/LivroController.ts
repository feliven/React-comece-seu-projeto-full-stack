import { Request, Response } from "express";
import { Livro } from "../shared/types";
import { getTodosOsLivros, createOrChangeLivro } from "../services/LivroService";

export const getLivros = (req: Request, res: Response) => {
  try {
    const dbLivros = getTodosOsLivros();

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
    const dbLivros = getTodosOsLivros();
    const novoLivro: Livro = req.body;

    const dbLivrosAtualizado = [novoLivro, ...dbLivros];

    createOrChangeLivro(dbLivrosAtualizado);

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
    const dbLivros = getTodosOsLivros();

    const livroAtualizado: Livro = req.body;
    const indexLivroParaAtualizar = dbLivros.findIndex((livro) => livro.id === livroAtualizado.id);

    dbLivros[indexLivroParaAtualizar] = { ...livroAtualizado };
    createOrChangeLivro(dbLivros);

    res.status(200).json(dbLivros);
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
    const dbLivros = getTodosOsLivros();

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
    createOrChangeLivro(dbLivros);

    res.status(200).json(dbLivros);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send(`An unexpected error occurred: ${error as string}`);
    }
  }
};
