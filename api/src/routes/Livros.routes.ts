import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).send("helloooooo");
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send(`An unexpected error occurred: ${error as string}`);
    }
  }
});

router.post("/", (req: Request, res: Response) => {
  try {
    const novoLivro = req.body;
    console.log(novoLivro);
    res.status(201).json(novoLivro);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send(`An unexpected error occurred: ${error as string}`);
    }
  }
});

export default router;
