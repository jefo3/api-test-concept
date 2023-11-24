import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategories: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategories.execute();

    return response.status(200).json({
      message: "Categorias retornadas com sucesso",
      data: allCategories,
    });
  }
}

export { ListCategoriesController };
