import { Event } from '../entities/Event';

export interface IEventRepository {
  save(event: Event): Promise<Event | void>;
  getPublicEvents(): Promise<Event[]>;
}
