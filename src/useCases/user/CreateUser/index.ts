import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

import Argon2HashProvider from '../../../providers/implementations/Argon2HashProvider';
import PostgresUsersRepository from "../../../repositories/implementations/PostgresUsersRepository";
import Utils from '../../../utils/implementation';
import JsonWebTokenJwtProvider from "../../../providers/implementations/JsonWebTokenJwtProvider";

const argon2HashProvider = new Argon2HashProvider();
const postgresUsersRepository = new PostgresUsersRepository();
const utils = new Utils();
const jsonWebTokenJwtProvider = new JsonWebTokenJwtProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  argon2HashProvider,
  utils,
);

const createUserController = new CreateUserController(
  createUserUseCase,
  jsonWebTokenJwtProvider,
);

export { createUserController };
