import { NextFunction, Request, Response } from "express";
import { Livro } from "../shared/types";
import {
  retornarTodosOsLivros,
  retornarLivroPorId,
  alterarLivro,
  removerLivro,
  criarLivro,
} from "../services/LivroService";
import { isNotANumber } from "../shared/utils";

const MSG_NAO_ENCONTRADO = "Livro não encontrado";
const MSG_ID_OBRIGATORIO = "ID é obrigatório";
const MSG_ID_INVALIDO = "ID inválido - precisa ser um número";

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
    if (id === undefined) {
      return res.status(400).send(MSG_ID_OBRIGATORIO);
    } else if (isNotANumber(id)) {
      return res.status(422).send(MSG_ID_INVALIDO);
    }

    const livroProcurado = retornarLivroPorId(id);
    if (!livroProcurado) {
      return res.status(404).send(MSG_NAO_ENCONTRADO);
    }

    res.status(200).json(livroProcurado);
  } catch (error) {
    next(error);
  }
};

export const postLivro = (req: Request, res: Response, next: NextFunction) => {
  try {
    const novoLivro: Livro = req.body;
    const livroFoiCriado = criarLivro(novoLivro);

    if (!livroFoiCriado) {
      return res.status(400).send("Este ID já existe");
    }

    res.status(201).json(novoLivro);
  } catch (error) {
    next(error);
  }
};

export const putLivro = (req: Request<{ id?: string }>, res: Response, next: NextFunction) => {
  try {
    const livroAtualizado: Livro = req.body;
    const { id } = req.params;

    if (Number(id) !== livroAtualizado.id) {
      return res.status(400).send("IDs precisam ser iguais");
    } else if (isNotANumber(id)) {
      return res.status(422).send(MSG_ID_INVALIDO);
    }

    const livroFoiAtualizado = alterarLivro(livroAtualizado);
    if (!livroFoiAtualizado) {
      return res.status(404).send(MSG_NAO_ENCONTRADO);
    }

    res.status(200).json(livroAtualizado);
  } catch (error) {
    next(error);
  }
};

export const deleteLivro = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (id === undefined) {
      return res.status(400).send(MSG_ID_OBRIGATORIO);
    } else if (isNotANumber(id)) {
      return res.status(422).send(MSG_ID_INVALIDO);
    }

    const livroFoiRemovido = removerLivro(id);
    if (!livroFoiRemovido) {
      return res.status(404).send(MSG_NAO_ENCONTRADO);
    }

    res.status(200).send("Livro removido");
  } catch (error) {
    next(error);
  }
};
