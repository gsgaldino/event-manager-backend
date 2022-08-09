import { IEventRepository } from '../../../repositories/IEventRepository';
import { Event } from '../../../entities/Event';
import { User } from '../../../entities/User';

class GetEventUseCase {
  constructor(
    private eventRepository: IEventRepository,
  ) {}

  async execute(id: string): Promise<Event & { user: User } | null> {
    return this.eventRepository.getEvent(id);
  } 
}

export default GetEventUseCase;
