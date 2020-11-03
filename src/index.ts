import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./api";
// Init express
const app = express();

app.use(cors());
// update bodyparser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

router(app);

const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

const server = app.listen(port, () => {
  console.log(`server is starting on port ${port}`);
});
