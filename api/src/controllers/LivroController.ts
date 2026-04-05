import { NextFunction, Request, Response } from "express";
import { Livro } from "../shared/types";
import {
  retornarTodosOsLivros,
  retornarLivroPorId,
  alterarLivro,
  removerLivro,
  criarLivro,
} from "../services/LivroService";

const MSG_NAO_ENCONTRADO = "Livro não encontrado";
const MSG_ID_OBRIGATORIO = "ID é obrigatório";

export const getLivros = (req: Request, res: Response, next: NextFunction) => {
  try {
    const dbLivros = retornarTodosOsLivros();

    res.status(200).json(dbLivros);
  } catch (error) {
    next(error);
  }
};

export const getLivroPorId = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: MSG_ID_OBRIGATORIO });

    const livroProcurado = retornarLivroPorId(id);

    if (!livroProcurado) res.status(404).json({ message: MSG_NAO_ENCONTRADO });

    res.status(200).json(livroProcurado);
  } catch (error) {
    next(error);
  }
};

export const postLivro = (req: Request, res: Response, next: NextFunction) => {
  try {
    const novoLivro: Livro = req.body;
    const livroFoiCriado = criarLivro(novoLivro);

    if (!livroFoiCriado) res.status(400).json({ message: "Este ID já existe" });

    res.status(201).json(novoLivro);
  } catch (error) {
    next(error);
  }
};

export const putLivro = (req: Request<{ id?: string }>, res: Response, next: NextFunction) => {
  try {
    const livroAtualizado: Livro = req.body;
    const { id } = req.params;

    if (Number(id) !== livroAtualizado.id) res.status(400).json({ message: "IDs precisam ser iguais" });

    const livroFoiAtualizado = alterarLivro(livroAtualizado);

    if (!livroFoiAtualizado) res.status(404).json({ message: MSG_NAO_ENCONTRADO });

    res.status(200).json(livroAtualizado);
  } catch (error) {
    next(error);
  }
};

export const deleteLivro = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: MSG_ID_OBRIGATORIO });

    const livroFoiRemovido = removerLivro(id);

    if (!livroFoiRemovido) res.status(404).json({ message: MSG_NAO_ENCONTRADO });

    res.status(200).send("Livro removido");
  } catch (error) {
    next(error);
  }
};
