import express from "express";
import livros from "./routes/Livros.routes";

const app = express();

const port = 8000;

// Without express.json(), Express does not populate req.body
app.use(express.json());
app.use("/livros", livros);

app.listen(port, () => {
  console.log(`ouvindo na porta ${port}`);
});
