import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const allCategories = this.categoriesRepository.listAll();

    return allCategories;
  }
}

export { ListCategoriesUseCase };
