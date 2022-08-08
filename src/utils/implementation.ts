import { IUtilsProvider } from "./IUtilsProvider";

class Utils implements IUtilsProvider {
  getAcronym(word: string) {
    return `${word[0]}${word[1]}`;
  }
}

export default Utils;
