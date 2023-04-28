import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getChangedStrings } from "./getChangedStrings.ts";

Deno.test("拡張レーベンシュタイン距離", () => {
    const possibleChars = "aeiouptksmlnf".split("");
    const actual = getChangedStrings("pemu", possibleChars);
    console.log(actual)
  });