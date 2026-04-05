import axios from "axios";

const livrosApi = axios.create({ baseURL: "http://localhost:8000/livros" });

const getLivros = async () => {
  const response = await livrosApi.get("/");

  return response.data;
};

export { getLivros };
