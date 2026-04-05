import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import livros from "./routes/Livros.routes";

const app = express();

const port = 8000;

// Without express.json(), Express does not populate req.body
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/livros", livros);

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    res.status(500).send(error.message);
  } else {
    res.status(500).send(`An unexpected error occurred: ${error as string}`);
  }
  next();
});

app.listen(port, () => {
  console.log(`ouvindo na porta ${port}`);
});
