import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { LoginDTO } from "./LoginDTO";
import { IHashProvider } from '../../../providers/IHashProvider';
import { User } from '../../../entities/User';

class LoginUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  async execute(data: LoginDTO): Promise<User> {
    const user = await this.usersRepository.findByEmail(data.email);

    if (!user) throw new Error('User not found.');

    const valid = await this.hashProvider.compare(data.password, user.password);

    if (!valid) throw new Error('Invalid password.');

    return user;
  }
}

export default LoginUseCase;