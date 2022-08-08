import GetPublicEventsController from "./getPublicEventsController";
import GetPublicEventsUseCase from "./GetPublicEventsUseCase";

import PostgresEventRepository from "../../../repositories/implementations/PostgresEventRepository";

const postgresEventRepository = new PostgresEventRepository();

const getPublicEventsUseCase = new GetPublicEventsUseCase(postgresEventRepository);

const getPublicEventsController = new GetPublicEventsController(getPublicEventsUseCase);

export { getPublicEventsController };
