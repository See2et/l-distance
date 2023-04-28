export function getPermutations(str: string): string[] {
  const result: string[] = [];

  str.split("").forEach((_, index1) => {
    str.split("").forEach((_, index2) => {
      if (index1 === index2) return;
      if (Math.abs(index1 - index2) >= 3) return;
      const chars = str.split("");
      [chars[index1], chars[index2]] = [chars[index2], chars[index1]];
      result.push(chars.join(""));
    });
  });

  return result;
}

