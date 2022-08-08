import { IUsersRepository } from "../../IUsersRepository";
import { User } from '../../../entities/User';
import { prismaClient } from '../prismaClient';

class PostgresUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<void | User | null> {
    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    });

    return user;
  }

  async save(user: User): Promise<User> {
    const saved = await prismaClient.user.create({
      data: {
        email: user.email,
        password: user.password,
        acronym: user.acronym,
      }
    });

    return saved;
  }
}

export default PostgresUsersRepository;
