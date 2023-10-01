import { Request, Response } from "express";

import { CreateCouseService } from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  const createCouseService = new CreateCouseService();

  createCouseService.execute({
    duration: 30,
    educator: "Jeferson",
    name: "Node",
  });

  return response.status(200).send({
    sucess: "Sucesso",
  });
}
