import { IEventRepository } from "../../IEventRepository";
import { Event } from '../../../entities/Event';
import { prismaClient } from '../prismaClient';

class PostgresEventRepository implements IEventRepository {
  async getPublicEvents(): Promise<Event[]> {
    const events = await prismaClient.event.findMany();

    return events;
  }

  async save(event: Event): Promise<Event | void> {
    const saved = await prismaClient.event.create({
      data: {
        name: event.name,
        description: event.description,
        date: event.date,
        updated_at: new Date(),
        created_at: new Date(),
        deleted_at: new Date(),
        userId: event.userId,
      }
    });

    return saved;
  }
}

export default PostgresEventRepository;
