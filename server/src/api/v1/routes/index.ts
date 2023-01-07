import {Router, Request, Response} from "express";
import {getUsers} from "../controllers/users.controller";
import home from "./home";
import rooms from "./rooms";
import users from "./users";

const router = Router();

router.use("/", home);
router.use("/rooms", rooms);
router.use("/users", getUsers);
// catch 404 and forward to error handler
router.use("*", (req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist",
  });
});

export default router;
