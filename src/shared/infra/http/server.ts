import "express-async-errors";
import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { AppError } from "@erros/AppError";
import { router } from "@shared/infra/http/routes";

import swaggerDocument from "../../../../swagger.json";

import "@shared/infra/typeorm";
import "@shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response
      .status(500)
      .json({ message: `Internal Server Error - ${err.message}` });
  },
);

app.listen(3333, () => {
  console.log("Serve ON");
});
