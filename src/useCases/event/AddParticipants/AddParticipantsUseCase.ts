import { IEventRepository } from '../../../repositories/IEventRepository';
import { AddParticipantsDTO } from './AddParticipantsDTO';
import { Event } from '../../../entities/Event';

class AddParticipantsUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute(data: AddParticipantsDTO): Promise<Event | void> {
    return this.eventRepository.addParticipants({
      eventId: data.eventId,
      emails: data.emails
    });
  }
}

export default AddParticipantsUseCase;
