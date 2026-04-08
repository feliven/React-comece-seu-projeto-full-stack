import { getLivros } from "../../services/livro-service";
import type { Livro } from "../../shared/types";

let livros: Livro[] = [];
let listeners: Set<() => void> = new Set();
let isInitialized = false;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const notifyListeners = () => {
  listeners.forEach((listener) => listener());
};

const getSnapshot = () => livros;

const getServerSnapshot = () => livros;

const initializeLivrosInternal = async () => {
  if (isInitialized) return;
  isInitialized = true;
  const livrosApi = await getLivros();
  livros = livrosApi;
  notifyListeners();
};

export const useLivrosStore = () => {
  // Lazy initialization on first store access
  void initializeLivrosInternal();

  return {
    subscribe,
    getSnapshot,
    getServerSnapshot,
  };
};
