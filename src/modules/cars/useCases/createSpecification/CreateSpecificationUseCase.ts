import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository,
  ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExist =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error("Especificação ja existe");
    }
    this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
