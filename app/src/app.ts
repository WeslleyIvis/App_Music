import express from "express";
import appConfig from "./controllers/appConfig";

const app = express()
appConfig(app)

app.listen(5555, () => {
    console.log('server https://localhost:5555/')
})
