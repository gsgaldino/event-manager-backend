import { IEventRepository } from '../../../repositories/IEventRepository';
import { RemoveParticipantDTO } from './RemoveParticipantDTO';
import { Event } from '../../../entities/Event';

class RemoveParticipantUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute(data: RemoveParticipantDTO): Promise<Event | void> {
    return this.eventRepository.removeParticipant({
      eventId: data.eventId,
      email: data.email,
    });
  }
}

export default RemoveParticipantUseCase;
