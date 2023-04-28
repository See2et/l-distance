import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { deleteChar } from "./deleteChar.ts";

Deno.test("delete a char", () => {
  const actual = deleteChar("pemu");
  const expected = ["emu", "pmu", "peu", "pem"];
  assertEquals(actual, expected);
});
