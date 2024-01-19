import { lst, lstLen } from "../006_puzzleGame";

const logLst = (): void => {
  console.clear();
  for (let i = 0; i < lstLen; i++) {
    let tempString = "| ";
    for (let j = 0; j < lstLen; j++) {
      tempString += lst[i][j] + " ";
    }
    tempString += "|";
    console.log(tempString);
  }
  console.log();
};

export default logLst;
