import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoriesUseCase);
    const allCategories = await listCategories.execute();

    return response.status(200).json({
      message: "Categorias retornadas com sucesso",
      data: allCategories,
    });
  }
}

export { ListCategoriesController };
