import { Request, Response } from 'express';
import GetPublicEventsUseCase from './GetPublicEventsUseCase';

class GetPublicEventsController {
  constructor(
    private getPublicEventsUseCase: GetPublicEventsUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const events = await this.getPublicEventsUseCase.execute();

      return res.json(events);
    } catch ({ message }) {
      res.status(401).json({
        message: message || 'Unexpected error.',
      });
    }
  }
}

export default GetPublicEventsController;
