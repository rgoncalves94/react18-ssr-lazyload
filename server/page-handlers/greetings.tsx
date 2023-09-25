import { Handler, Router } from "express";
import * as ReactDOM from "react-dom/server";
import { Greetings } from "../../app/components/Greetings";
import { Log } from "../logger";


const router = Router()

const handler: Handler = (_, res) => {
  Log.info("Called GET /greetings")
  const { pipe } = ReactDOM.renderToPipeableStream(<Greetings />, {
    // bootstrapScripts: ['/index.js'],
    onShellReady() {
      Log.info("greetings page ready to render")
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  });
}


router.get("/greetings", handler)

export default router;
