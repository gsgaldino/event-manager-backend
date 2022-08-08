import { Request, Response } from 'express';
import CreateEventUseCase from './CreateEventUseCase';

class CreateEventController {
  constructor(
    private createEventUseCase: CreateEventUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, description, date, userId } = req.body;

      const event = await this.createEventUseCase.execute({
        name,
        description,
        date: new Date(date),
        userId,
      });

      return res.json(event);
    } catch ({ message }) {
      res.status(401).json({
        message: message || 'Unexpected error.',
      });
    }
  }
}

export default CreateEventController;
