import axios from "axios";

const favoritosApi = axios.create({ baseURL: "http://localhost:8000/favoritos" });

const getFavoritos = async () => {
  const response = await favoritosApi.get("/");

  return response.data;
};

export { getFavoritos };
