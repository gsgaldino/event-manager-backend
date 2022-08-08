import CreateEventController from "./CreateEventController";
import CreateEventUseCase from "./CreateEventUseCase";

import PostgresEventRepository from "../../../repositories/implementations/PostgresEventRepository";

const postgresEventRepository = new PostgresEventRepository();
const createEventUseCase = new CreateEventUseCase(postgresEventRepository);

const createEventController = new CreateEventController(createEventUseCase);

export { createEventController };
