import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
  res.sendFile(
    "/Users/georgekakarlis/Desktop/NUZI/nuzi-server-ts/server/static/index.html"
  );
});

export default router;
