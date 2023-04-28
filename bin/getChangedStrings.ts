import { deleteChar } from "./deleteChar.ts";
import { insertChar } from "./insertChar.ts";
import { replaceChar } from "./replaceChar.ts";

export function getChangedStrings(str: string, possibleChars: string[]): string[] {  
    const deletedChar = deleteChar(str);
    const replacedChar = replaceChar(str, possibleChars);
    const insertedChar = insertChar(str, possibleChars);

    return [...new Set(deletedChar.concat(replacedChar).concat(insertedChar))];
  }