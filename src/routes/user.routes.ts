import { Router, Request, Response } from 'express';
import { createUserController } from '../useCases/user/CreateUser';
import { loginController } from '../useCases/user/Login';

const router = Router();

router
  .post('/', (req: Request, res: Response) => {
    return createUserController.handle(req, res);
  })
  .post('/login', (req: Request, res: Response) => {
    return loginController.handle(req, res);
  });

export default router;
