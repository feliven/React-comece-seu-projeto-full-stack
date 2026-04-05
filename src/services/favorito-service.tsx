import axios from "axios";
import type { Livro } from "../shared/types";

const favoritosApi = axios.create({ baseURL: "http://localhost:8000/favoritos" });

const getFavoritos = async () => {
  try {
    const response = await favoritosApi.get<Livro[]>("/");
    return response.data;
  } catch (error) {
    alert(`Erro ao obter favoritos: ${error as string}`);
    throw error;
  }
};

const postFavorito = async (id: string) => {
  try {
    await favoritosApi.post(`/${id}`);
  } catch (error) {
    alert(`Favorito de id ${id} já foi adicionado...`);
    throw error;
  }
};

const deleteFavorito = async (id: string) => {
  try {
    await favoritosApi.delete(`/${id}`);
  } catch (error) {
    alert(`Favorito ${id} já foi removido.`);
    throw error;
  }
};

export { getFavoritos, postFavorito, deleteFavorito };
