import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { replaceChar } from "./replaceChar.ts";

Deno.test("replace a char", () => {
    const possibleChars = "aeiouptksmlnf".split("");
    const actual = replaceChar("pemu", possibleChars);
    const expected = [
        "aemu", "eemu", "iemu", "oemu", "uemu",
        "pemu", "temu", "kemu", "semu", "memu",
        "lemu", "nemu", "femu", "pamu", "pemu",
        "pimu", "pomu", "pumu", "ppmu", "ptmu",
        "pkmu", "psmu", "pmmu", "plmu", "pnmu",
        "pfmu", "peau", "peeu", "peiu", "peou",
        "peuu", "pepu", "petu", "peku", "pesu",
        "pemu", "pelu", "penu", "pefu", "pema",
        "peme", "pemi", "pemo", "pemu", "pemp",
        "pemt", "pemk", "pems", "pemm", "peml",
        "pemn", "pemf"
      ]
    assertEquals(actual, expected)
  });