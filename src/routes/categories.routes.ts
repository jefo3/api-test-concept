import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ message: "Usuario ja existe" });
  }

  categoriesRepository.create({ name, description });

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
