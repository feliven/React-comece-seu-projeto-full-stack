import { Router } from "express";
import { getLivros, postLivro, putLivro, deleteLivro, getLivroPorId } from "../controllers/LivroController";

const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivroPorId);

router.post("/", postLivro);

router.put("/", putLivro);
router.put("/:id", putLivro);

router.delete("/:id", deleteLivro);

export default router;
