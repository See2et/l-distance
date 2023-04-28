export function replaceChar(str: string, possibleChars: string[]) {
  const initialAry = str.split("");
  return initialAry.flatMap((_, i, a) => {
    const result = possibleChars.map((char) => {
      const result = [...a];
      result[i] = char;
      return result.join("");
    });
    return result;
  });
}
