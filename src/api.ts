import * as express from "express";
import { validatePostData } from "./services/validation";
import { StatusCodes } from "http-status-codes";
import { Runner } from "./services/runner";

const runner = new Runner();

export const router = (app: express.Application) => {
  app.post("/", (req, res) => {
    try {
      const body = req.body;
      console.log(body);
      validatePostData(body);
      const response = runner.runPipes(body.payload);
      return res.status(StatusCodes.OK).json({ response });
    } catch (err) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: `Could not decode request: ${err.message}` });
    }
  });

  app.get("/", (req, res) => {
    return res.status(StatusCodes.OK).json("Server alive");
  });
};
