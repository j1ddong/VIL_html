import { waitForKeyPress, waitForUserInput } from "./utils/input/input.utils";

let lst: (number | string)[][] = [];
let lstLen: number = 0;
let row: number = 0;
let column: number = 0;

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const getRandomIntLst = () => {
  const uniqueNums = new Set();
  const maxNum = lstLen * lstLen;
  for (let i = 0; i < lstLen; i++) {
    let tempLst: (number | string)[] = [];
    for (let j = 0; j < lstLen; j++) {
      let randomNum: number = getRandomInt(maxNum);

      while (uniqueNums.has(randomNum)) {
        randomNum = getRandomInt(maxNum);
      }

      if (randomNum === maxNum) {
        tempLst.push(" ");
        row = i;
        column = j;
      } else {
        tempLst.push(randomNum);
      }
      uniqueNums.add(randomNum);
    }
    lst.push(tempLst);
  }
};

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

const convertLen = (inputString: string): number => {
  switch (inputString) {
    case "S":
      return 3;
    case "M":
      return 4;
    case "L":
      return 5;
  }
  return 0;
};

const keyCtrl = (keyInputCtrl: boolean, keyInputName: string): void => {
  if (!keyInputCtrl) {
    switch (keyInputName) {
      case "up":
        if (row !== 0) {
          const originalVal = lst[row][column];
          lst[row][column] = lst[row - 1][column];
          lst[row - 1][column] = originalVal;
          row--;
        }
        break;
      case "down":
        if (row !== lstLen - 1) {
          const originalVal = lst[row][column];
          lst[row][column] = lst[row + 1][column];
          lst[row + 1][column] = originalVal;
          row++;
        }
        break;
      case "left":
        if (column !== 0) {
          const originalVal = lst[row][column];
          lst[row][column] = lst[row][column - 1];
          lst[row][column - 1] = originalVal;
          column--;
        }
        break;
      case "right":
        if (column !== lstLen - 1) {
          const originalVal = lst[row][column];
          lst[row][column] = lst[row][column + 1];
          lst[row][column + 1] = originalVal;
          column++;
        }
        break;
    }
  }
};

const isSolved = (): boolean => {
  for (let row = 0; row < lstLen; row++) {
    for (let col = 0; col < lstLen; col++) {
      if (row === lstLen - 1 && col === lstLen - 1 && lst[row][col] === " ") {
        return true;
      } else if (lst[row][col] !== row * lstLen + col + 1) {
        return false;
      }
    }
  }
  return true;
};

// random lst 만들기...
// count display
// time remaining > setInterval

async function main() {
  let condition: boolean = false;
  let inputString: string = "";
  do {
    inputString = await waitForUserInput("SML 중에 선택해주세요");
    inputString = inputString.toLocaleUpperCase();
    condition = inputString === "S" || inputString === "M" || inputString === "L";
  } while (!condition);

  lstLen = convertLen(inputString);
  getRandomIntLst();
  logLst();

  while (!isSolved()) {
    let keyInput = await waitForKeyPress();
    let keyInputCtrl: boolean = keyInput.ctrl;
    let keyInputName: string = keyInput.name;

    if (keyInputCtrl && keyInputName === "c") {
      return;
    }
    keyCtrl(keyInput.ctrl, keyInput.name);
    logLst();
  }
  console.log("게임해결!");
}
main();
