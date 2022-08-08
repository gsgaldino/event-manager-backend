export interface Event {
  name: string;
  description: string;
  date: Date;
  updated_at?: Date;
  deleted_at?:  Date;
  deleted?: boolean;
  userId: string;
  user?: string;
}
