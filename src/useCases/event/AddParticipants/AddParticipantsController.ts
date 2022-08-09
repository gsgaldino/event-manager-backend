import { Request, Response } from 'express';
import AddParticipantsUseCase from './AddParticipantsUseCase';

class AddParticipantsController {
  constructor(
    private addParticipantsUseCase: AddParticipantsUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { emails } = req.body;
      const { id } = req.params;

      const event = await this.addParticipantsUseCase.execute({
        eventId: id,
        emails,
      });

      return res.json(event);
    } catch ({ message }) {
      res.status(401).json({
        message: message || 'Unexpected error.',
      });
    }
  }
}

export default AddParticipantsController;
