import { NextFunction, Request, Response } from "express";
import { Livro } from "../shared/types";
import {
  retornarTodosOsFavoritos,
  retornarFavoritoPorId,
  removerFavorito,
  criarFavorito,
} from "../services/FavoritoService";
import { isNotANumber } from "../shared/utils";

const MSG_NAO_ENCONTRADO = "Favorito não encontrado";
const MSG_ID_OBRIGATORIO = "ID é obrigatório";
const MSG_ID_INVALIDO = "ID inválido - precisa ser um número";

export const getFavoritos = (req: Request, res: Response, next: NextFunction) => {
  try {
    const dbFavoritos: Livro[] = retornarTodosOsFavoritos();

    res.status(200).json(dbFavoritos);
  } catch (error) {
    next(error);
  }
};

export const getFavoritoPorId = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (id === undefined) {
      return res.status(400).send(MSG_ID_OBRIGATORIO);
    } else if (isNotANumber(id)) {
      return res.status(422).send(MSG_ID_INVALIDO);
    }

    const livroProcurado = retornarFavoritoPorId(id);
    if (!livroProcurado) {
      return res.status(404).send(MSG_NAO_ENCONTRADO);
    }

    res.status(200).json(livroProcurado);
  } catch (error) {
    next(error);
  }
};

export const postFavorito = (req: Request<{ id?: string }>, res: Response, next: NextFunction) => {
  try {
    const corpoReq: { id: string } | undefined = req.body;
    const { id: idDaUrl } = req.params;

    if (idDaUrl === undefined && corpoReq?.id === undefined) {
      return res.status(400).send(MSG_ID_OBRIGATORIO);
    } else if (isNotANumber(idDaUrl) && isNotANumber(corpoReq?.id)) {
      return res.status(422).send(MSG_ID_INVALIDO);
    } else if (idDaUrl && corpoReq?.id && Number(idDaUrl) !== Number(corpoReq?.id)) {
      return res.status(400).send("IDs precisam ser iguais");
    }

    const idParaUsar = corpoReq?.id ?? idDaUrl ?? "-1";
    const favoritoFoiCriado = criarFavorito(idParaUsar);
    if (!favoritoFoiCriado) {
      return res.status(400).send("Este livro já foi favoritado");
    }

    res.status(201).send("Favorito adicionado!");
  } catch (error) {
    next(error);
  }
};

export const deleteFavorito = (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (id === undefined) {
      return res.status(400).send(MSG_ID_OBRIGATORIO);
    } else if (isNotANumber(id)) {
      return res.status(422).send(MSG_ID_INVALIDO);
    }

    const livroFoiRemovido = removerFavorito(id);
    if (!livroFoiRemovido) {
      return res.status(404).send(MSG_NAO_ENCONTRADO);
    }

    res.status(200).send("Favorito removido");
  } catch (error) {
    next(error);
  }
};
