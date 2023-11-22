import { Category } from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesReposotory implements ICategoriesRepository {
  public findByName(name: string): Category {
    console.log("name-->", name);
    return null;
  }
  public listAll(): Category[] {
    return null;
  }
  public create({ description, name }: ICreateCategoryDTO): void {
    console.log("CategoryDTO -->", description, name);
  }
}

export { PostgresCategoriesReposotory };
