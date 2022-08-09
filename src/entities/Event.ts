import { User } from "@prisma/client";

export interface Event {
  name: string;
  description: string;
  date: Date;
  updated_at?: Date;
  deleted?: boolean;
  userId: string;
  user?: User;
  participantsEmail: string[];
  participants: string[];
}
