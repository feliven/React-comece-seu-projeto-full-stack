import { Router } from "express";
import { getLivros, postLivro } from "../controllers/LivroController";

const router = Router();

router.get("/", getLivros);

router.post("/", postLivro);

export default router;
