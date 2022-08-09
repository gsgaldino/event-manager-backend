import { Request, Response } from 'express';
import GetEventUseCase from './GetEventUseCase';

class GetEventController {
  constructor(
    private getEventUseCase: GetEventUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const event = await this.getEventUseCase.execute(id);

      return res.json({
        ...event,
        participants: JSON.parse(event.participants),
      });
    } catch ({ message }) {
      res.status(401).json({
        message: message || 'Unexpected error.',
      });
    }
  }
}

export default GetEventController;
