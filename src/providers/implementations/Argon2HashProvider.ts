import argon from 'argon2';
import { IHashProvider } from "../IHashProvider";

class Argon2HashProvider implements IHashProvider {
  compare(password: string, hashedPassword: string): Promise<boolean> {
    return argon.verify(hashedPassword, password);
  }

  hash(password: string): Promise<string> {
    return argon.hash(password);
  }
}

export default Argon2HashProvider;
