import { Router } from "express";
import { getLivros, postLivro, putLivro, deleteLivro } from "../controllers/LivroController";

const router = Router();

router.get("/", getLivros);

router.post("/", postLivro);

router.put("/", putLivro);

router.delete("/", deleteLivro);

export default router;
