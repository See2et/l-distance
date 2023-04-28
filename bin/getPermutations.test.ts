import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getPermutations } from "./getPermutations.ts";

Deno.test("swap a couple of chars", () => {
  const actual = getPermutations("pemu");
  const expected = [
    "epmu",
    "mepu",
    "epmu",
    "pmeu",
    "pume",
    "mepu",
    "pmeu",
    "peum",
    "pume",
    "peum",
  ];
  assertEquals(actual, expected);
});
