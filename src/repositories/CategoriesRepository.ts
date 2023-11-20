import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  public create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    // category.setCreatedAt(new Date().toISOString());

    this.categories.push(category);
  }

  public listAll(): Category[] {
    return this.categories;
  }

  public findByName(name: string): Category {
    const category = this.categories.find(
      (category) => category.getName() === name,
    );

    return category;
  }
}

export { CategoriesRepository };