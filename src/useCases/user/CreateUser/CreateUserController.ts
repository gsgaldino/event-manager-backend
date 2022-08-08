import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';
import { IJwtProvider } from '../../../providers/IJwtProvider';

class CreateUserController {
  constructor(
    private createContactUseCase: CreateUserUseCase,
    private jsonWebTokenJwtProvider: IJwtProvider,
  ) {}

  async handle(req: Request, res: Response): Promise<Response | void> {
    try {
      const { email, password } = req.body;

      const user = await this.createContactUseCase.execute({
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

export default CreateUserController;