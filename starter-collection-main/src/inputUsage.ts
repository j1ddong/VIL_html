import { waitForKeyPress, waitForUserInput } from "./utils/input/input.utils";

async function main() {
  let condition: boolean = false;
  do {
    const answer = await waitForUserInput("SML 중에 선택해주세요");
    condition = answer === "S" || answer === "M" || answer === "L";
  } while (!condition);
}
main();
