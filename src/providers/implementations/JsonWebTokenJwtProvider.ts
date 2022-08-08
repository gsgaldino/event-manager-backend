import jwt, { JwtPayload } from 'jsonwebtoken';
import { IJwtProvider } from '../IJwtProvider';

class JsonWebTokenJwtProvider implements IJwtProvider {
  private secret: string;
  constructor() {
    this.secret = process.env.JWT_SECRET || '';
  };

  sign(id: string): string {
    const token = jwt.sign({ id }, this.secret);
    return token;
  }

  verify(token: string): JwtPayload {
    const payload = jwt.verify(token, this.secret) as JwtPayload;
    return payload;
  }
}

export default JsonWebTokenJwtProvider;
