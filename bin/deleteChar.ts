export function deleteChar(str: string) {
  const initialAry = str.split("");
  const deletedChar = initialAry.flatMap((_, i) =>
    initialAry.filter((_, j) => i !== j).join("")
  );
  return deletedChar;
}
