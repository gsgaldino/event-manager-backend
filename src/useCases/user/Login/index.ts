import LoginController from './LoginController';
import LoginUseCase from './LoginUseCase';

import Argon2HashProvider from '../../../providers/implementations/Argon2HashProvider';
import PostgresUsersRepository from "../../../repositories/implementations/PostgresUsersRepository";
import JsonWebTokenJwtProvider from '../../../providers/implementations/JsonWebTokenJwtProvider';

const jsonWebTokenJwtProvider = new JsonWebTokenJwtProvider();

const loginUseCase = new LoginUseCase(
  new PostgresUsersRepository(),
  new Argon2HashProvider(),
);

const loginController = new LoginController(
  loginUseCase,
  jsonWebTokenJwtProvider,
);

export { loginController, loginUseCase };
