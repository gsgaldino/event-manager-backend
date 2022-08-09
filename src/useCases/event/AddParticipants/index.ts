import AddParticipantsController from "./AddParticipantsController";
import AddParticipantsUseCase from "./AddParticipantsUseCase";

import PostgresEventRepository from "../../../repositories/implementations/PostgresEventRepository";

const postgresEventRepository = new PostgresEventRepository();
const addParticipantsUseCase = new AddParticipantsUseCase(postgresEventRepository);

const addParticipantsController = new AddParticipantsController(addParticipantsUseCase);

export { addParticipantsController };
