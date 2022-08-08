import { Request, Response } from 'express';
import LoginUseCase from "./LoginUseCase";
import { IJwtProvider } from '../../../providers/IJwtProvider';

class LoginController {
  constructor(
    private loginUseCase: LoginUseCase,
    private jsonWebTokenJwtProvider: IJwtProvider,
  ) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    try {
      const { email, password } = req.body;

      const user = await this.loginUseCase.execute({
        email,
        password,
      });

      const dashboardToken = this.jsonWebTokenJwtProvider.sign(user.id || '');

      return res.json({
        ...user,
        dashboardToken,
      });
    } catch ({ message }) {
      res.status(401).json({
        message: message || 'Unexpected error.',
      });
    }
  }
}

export default LoginController;
