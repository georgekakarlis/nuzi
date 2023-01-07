import {Router} from "express";
import * as uuid from "uuid";
import {db} from "../../../../database/db";

const router = Router();

router.get("/rooms");

router.post("/join-room", (req, res) => {
  const userId = uuid.v4();
  const roomId = req.body.roomId;

  db.run(
    "INSERT INTO users (id, roomId) VALUES (?, ?)",
    [userId, roomId],
    (err) => {
      if (err) {
        return res.status(500).json({error: "Error storing user"});
      }

      return res.json({userId});
    }
  );
});

export default router;
