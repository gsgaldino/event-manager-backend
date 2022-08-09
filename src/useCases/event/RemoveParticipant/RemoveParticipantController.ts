import { Request, Response } from 'express';
import RemoveParticipantUseCase from './RemoveParticipantUseCase';

class RemoveParticipantController {
  constructor(
    private addParticipantsUseCase: RemoveParticipantUseCase,
  ) {}

  async handle(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const { id } = req.params;

      const event = await this.addParticipantsUseCase.execute({
        eventId: id,
        email,
      });

      return res.json(event);
    } catch ({ message }) {
      res.status(401).json({
        message: message || 'Unexpected error.',
      });
    }
  }
}

export default RemoveParticipantController;
