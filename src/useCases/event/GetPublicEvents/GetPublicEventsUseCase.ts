import { IEventRepository } from '../../../repositories/IEventRepository';
import { Event } from '../../../entities/Event';

class GetPublicEventsUseCase {
  constructor(
    private eventRepository: IEventRepository,
  ) {}

  async execute(): Promise<Event[]> {
    return this.eventRepository.getPublicEvents();
  } 
}

export default GetPublicEventsUseCase;
