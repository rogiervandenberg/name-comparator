import { sha224 } from "js-sha256";

export default class NameCode {

public forName(name: string) {
  return name.length > 0 ? this.makeHash(name).substr(0, 6): "";
}

private makeHash(input: string): string {
  const stringToHash = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\W/g, "");
  // console.log(`Making hash for "${stringToHash}"`);
  return sha224(stringToHash);
}
}


