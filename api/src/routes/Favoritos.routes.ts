import { Router } from "express";
import { deleteFavorito, getFavoritoPorId, getFavoritos, postFavorito } from "../controllers/FavoritoController";

const router = Router();

router.get("/", getFavoritos);
router.get("/:id", getFavoritoPorId);

router.post("/", postFavorito);
router.post("/:id", postFavorito);

router.delete("/:id", deleteFavorito);

export default router;
