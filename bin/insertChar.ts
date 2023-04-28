export function insertChar(str: string, possibleChars: string[]) {
    const initialAry = str.split("");
    return initialAry.flatMap((_, i, a) => {
        const result = possibleChars.map((char) => {
            const result = [...a];
            result.splice(i, 0, char)
            return result.join("");
        });
        return result;
      });
}