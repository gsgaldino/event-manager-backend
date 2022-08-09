import RemoveParticipantController from "./RemoveParticipantController";
import RemoveParticipantUseCase from "./RemoveParticipantUseCase";

import PostgresEventRepository from "../../../repositories/implementations/PostgresEventRepository";

const postgresEventRepository = new PostgresEventRepository();
const removeParticipantUseCase = new RemoveParticipantUseCase(postgresEventRepository);

const removeParticipantController = new RemoveParticipantController(removeParticipantUseCase);

export { removeParticipantController };
