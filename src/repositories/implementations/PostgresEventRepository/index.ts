import { IEventRepository } from "../../IEventRepository";
import { Event } from '../../../entities/Event';
import { prismaClient } from '../prismaClient';
import { User } from "@prisma/client";

class PostgresEventRepository implements IEventRepository {
  async getPublicEvents(): Promise<Event[] | any> {
    const events = await prismaClient.event.findMany({
      orderBy: {
        date: 'desc',
      }
    });

    return events;
  }

  async getEvent(id: string): Promise<Event & { user: User} | any> {
    const event = await prismaClient.event.findFirst({
      include: {
        user: true,
      },
      where: {
        id: id,
      }
    });

    return event;
  }

  async save(event: Event): Promise<Event | any> {
    const saved = await prismaClient.event.create({
      data: {
        name: event.name,
        description: event.description,
        date: event.date,
        updated_at: new Date(),
        created_at: new Date(),
        userId: event.userId,
      }
    });

    return saved;
  }

  async addParticipants(
      { eventId, emails } : any): Promise<Event | any> {
    const event = await prismaClient.event.findFirst({
      where: {
        id: eventId,
      }
    });

    if (!event) return;

    const participantsIds = JSON.parse(event.participants);

    const updatedEvent = await prismaClient.event.update({
      where: {
        id: eventId,
      },
      data: {
        participants: {
          set: JSON.stringify(participantsIds.concat(emails)),
        }
      }
    });

    return updatedEvent;
  }

  async removeParticipant({ eventId, email }: any): Promise<any> {
    const [event] = await prismaClient.event.findMany({
      where: {
        id: eventId,
      }
    });

    if (!event) return;

    const participantsIds = JSON.parse(event.participants);

    const updatedEvent = await prismaClient.event.update({
      where: {
        id: eventId,
      },
      data: {
        participants: {
          set: JSON.stringify(participantsIds.filter((id: string) => id !== email)),
        }
      }
    });

    return updatedEvent;
  }
}

export default PostgresEventRepository;
