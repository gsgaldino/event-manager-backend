import { JwtPayload } from "jsonwebtoken";

export interface IJwtProvider {
  sign(id: string): string;
  verify(token: string): JwtPayload;
}
