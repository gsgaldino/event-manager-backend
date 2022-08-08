import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { IHashProvider } from '../../../providers/IHashProvider';
import { CreateUserDTO } from "./CreateUserDTO";
import { IUtilsProvider } from '../../../utils/IUtilsProvider';
import { User } from "../../../entities/User";

class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
    private utilsProvider: IUtilsProvider,
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const user = await this.usersRepository.findByEmail(data.email);

    if (user) throw new Error('User already exists.');

    return await this.usersRepository.save({
      email: data.email,
      password: await this.hashProvider.hash(data.password),
      acronym: this.utilsProvider.getAcronym(data.email),
    });
  }
}

export default CreateUserUseCase;