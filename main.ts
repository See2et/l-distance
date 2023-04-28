import { getChangedStrings } from "./bin/getChangedStrings.ts";

const changedStrings = getChangedStrings("pusuma", "aeiouptksmnlf".split(""))
console.log(changedStrings)
