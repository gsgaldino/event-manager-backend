import { Router, Request, Response } from 'express';

import { createEventController } from '../useCases/event/CreateEvent';
import { getPublicEventsController } from '../useCases/event/GetPublicEvents';
import { getEventController } from '../useCases/event/GetEvent';
import { addParticipantsController } from '../useCases/event/AddParticipants';
import { removeParticipantController } from '../useCases/event/RemoveParticipant';

import jwtMiddleware from '../middlewares/jwt';

const router = Router();

router
  .get('/', (req: Request, res: Response) => {
    return getPublicEventsController.handle(req, res);
  })
  .get('/:id', (req: Request, res: Response) => {
    return getEventController.handle(req, res);
  })
  .use(jwtMiddleware)
  .post('/', (req: Request, res: Response) => {
    return createEventController.handle(req, res);
  })
  .post('/:id/participants', (req: Request, res: Response) => {
    return addParticipantsController.handle(req, res);
  })
  .delete('/:id/participants', (req: Request, res: Response) => {
    return removeParticipantController.handle(req, res);
  });

export default router;
