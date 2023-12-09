import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepostory {
  create(data: ICreateUserDTO): Promise<void>;
}
export { IUsersRepostory };
