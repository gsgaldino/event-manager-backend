import { IEventRepository } from '../../../repositories/IEventRepository';
import { CreateEventDTO } from './CreateEventDTO';
import { Event } from '../../../entities/Event';

class CreateEventUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute(event: CreateEventDTO): Promise<Event | void> {
    return this.eventRepository.save(event);
  }
}

export default CreateEventUseCase;
