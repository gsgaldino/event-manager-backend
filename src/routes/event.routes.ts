import { Router, Request, Response } from 'express';

import { createEventController } from '../useCases/event/CreateEvent';
import { getPublicEventsController } from '../useCases/event/GetPublicEvents';

import jwtMiddleware from '../middlewares/jwt';

const router = Router();

router
  .get('/', (req: Request, res: Response) => {
    return getPublicEventsController.handle(req, res);
  })
  .use(jwtMiddleware)
  .post('/', (req: Request, res: Response) => {
    return createEventController.handle(req, res);
  });

export default router;
