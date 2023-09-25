import { Handler, Router } from "express";
import { Log } from "../logger";


const router = Router()

const greetings: Handler = (_, res) => {
  Log.info("called GET /greetings")
  res.status(200).json({ message: "Greetings!" })
}

router.get("/greetings", greetings)

export default router;
