import { User } from '@prisma/client';
import { Event } from '../entities/Event';

export interface IEventRepository {
  save(event: Event): Promise<Event | void>;
  getPublicEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event & { user: User} | null>;
  addParticipants(emails: string[]): Promise<Event | void>;
  removeParticipant({ eventId, email }: any): Promise<void>
}
