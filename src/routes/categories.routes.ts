import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).json({
    message: "Categoria criada com sucesso",
  });
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoriesRepository.listAll();

  response.status(200).json({
    message: "Categorias retornadas com sucesso",
    data: allCategories,
  });
});

export { categoriesRoutes };
