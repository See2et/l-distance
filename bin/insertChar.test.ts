import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { insertChar } from "./insertChar.ts";

Deno.test("insert a char", () => {
    const possibleChars = "aeiouptksmlnf".split("");
    const actual = insertChar("pemu", possibleChars);
    const expected = [
        "apemu", "epemu", "ipemu", "opemu", "upemu",
        "ppemu", "tpemu", "kpemu", "spemu", "mpemu",
        "lpemu", "npemu", "fpemu", "paemu", "peemu",
        "piemu", "poemu", "puemu", "ppemu", "ptemu",
        "pkemu", "psemu", "pmemu", "plemu", "pnemu",
        "pfemu", "peamu", "peemu", "peimu", "peomu",
        "peumu", "pepmu", "petmu", "pekmu", "pesmu",
        "pemmu", "pelmu", "penmu", "pefmu", "pemau",
        "pemeu", "pemiu", "pemou", "pemuu", "pempu",
        "pemtu", "pemku", "pemsu", "pemmu", "pemlu",
        "pemnu", "pemfu"
      ]
    assertEquals(actual, expected)
  });