import { Request, Response } from "express";
import { container } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, driver_license, email, password }: ICreateUserDTO =
      request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      driver_license,
      email,
      password,
    });

    return response.status(201).json({ message: "Usuário criado com sucesso" });
  }
}

export { CreateUserController };
