import express from "express"
import router from "./handlers"
import { Log } from "./logger"
import Greetings from "./page-handlers/greetings"

const App = express()

App.use(Greetings)
App.use("/api", router)

App.listen(3000, () => {
  Log.info("server online on port 3000")
})