import { useSyncExternalStore } from "react";
import type { Livro } from "../shared/types";
import { deleteFavorito, getFavoritos } from "../services/favorito-service";

let favoritos: Livro[] = [];
let listeners: Set<() => void> = new Set();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

const getSnapshot = () => favoritos;

const getServerSnapshot = () => [];

export const fetchFavoritos = async () => {
  const livrosApi = await getFavoritos();
  if (livrosApi) {
    favoritos = livrosApi;
    notifyListeners();
  }
};

export const removeFavoritoFromStore = async (id: string) => {
  await deleteFavorito(id);
  alert(`Livro de id ${id} foi removido dos Favoritos`);
  await fetchFavoritos();
};

export const useFavoritosStore = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
