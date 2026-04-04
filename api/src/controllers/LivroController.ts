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
