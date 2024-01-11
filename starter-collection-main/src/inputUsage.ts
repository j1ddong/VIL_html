import { waitForKeyPress, waitForUserInput } from "./utils/input/input.utils";

async function main() {
  const answer = await waitForUserInput("SML 중에 선택해주세요");
  console.log(answer);
}
main();
