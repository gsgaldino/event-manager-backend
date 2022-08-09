import PostgresEventRepository from "../../../repositories/implementations/PostgresEventRepository";

import GetEventController from "./GetEventController";
import GetEventUseCase from "./GetEventUseCase";

const postgresEventRepository = new PostgresEventRepository();

const getEventUseCase = new GetEventUseCase(postgresEventRepository);

const getEventController = new GetEventController(getEventUseCase);

export { getEventUseCase, getEventController };
