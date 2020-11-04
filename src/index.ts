import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { router } from "./api";
import serverless from "serverless-http";
import { StatusCodes } from "http-status-codes";
// Init express
export const app = express();
app.use(cors());
// update bodyparser
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     extended: true,
//     parameterLimit: 50000,
//   })
// );

app.use((req, res, next) => {
  bodyParser.json({
    verify: addRawBody,
  })(req, res, (err) => {
    if (err) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: `Could not decode request: JSON parsing failed` });
    }
    next();
  });
});

function addRawBody(req: any, res: any, buf: any, encoding: any) {
  req.rawBody = buf.toString();
}

router(app);

module.exports.handler = serverless(app);
