import { waitForKeyPress, waitForUserInput } from "./utils/input/input.utils";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const getRandomIntLst = (n: number): number[][] => {
  const lst: number[][] = [];
  for (let i = 0; i < n; i++) {
    let tempLst: number[] = [];
    for (let j = 0; j < n; j++) {
      const randomNum = getRandomInt(9);
      tempLst.push(randomNum);
    }
    lst.push(tempLst);
  }
  return lst;
};

const logLst = (lst: number[][], n: number, i: number, j: number, targetNum: number): number => {
  let lstSum: number = 0;
  console.clear();
  console.log(`합이 ${targetNum}이 되도록 숫자를 바꿔보세요` + "\n");
  for (let i = 0; i < n; i++) {
    process.stdout.write("| ");
    for (let j = 0; j < n; j++) {
      process.stdout.write(lst[i][j] + " ");
      lstSum += lst[i][j];
    }
    process.stdout.write("|" + "\n");
  }
  console.log();
  console.log("현재합:", lstSum);
  console.log("현재 선택된 값:", lst[i][j]);
  return lstSum;
};

const convertLen = (inputString: string): number => {
  let n: number = 0;
  switch (inputString) {
    case "S":
      n = 3;
      break;
    case "M":
      n = 4;
      break;
    case "L":
      n = 5;
      break;
  }
  return n;
};

const keyCtrl = (keyInputCtrl: boolean, keyInputName: string, n: number, i: number, j: number) => {
  if (keyInputCtrl && keyInputName === "c") {
    return false;
  } else if (!keyInputCtrl) {
    if (!isNaN(parseInt(keyInputName))) {
      return [i, j, parseInt(keyInputName)];
    } else {
      switch (keyInputName) {
        case "up":
          i === 0 ? (i = n - 1) : i--;
          break;
        case "down":
          i === n - 1 ? (i = 0) : i++;
          break;
        case "left":
          j === 0 ? (j = n - 1) : j--;
          break;
        case "right":
          j === n - 1 ? (j = 0) : j++;
          break;
      }
      return [i, j, -1];
    }
  }
};

async function main() {
  let condition: boolean = false;

  do {
    let inputString: string = await waitForUserInput("SML 중에 선택해주세요");
    inputString = inputString.toLocaleUpperCase();
    condition = inputString === "S" || inputString === "M" || inputString === "L";

    if (condition) {
      let n: number = convertLen(inputString);
      const targetNum: number = getRandomInt(9 * n);
      const lst: number[][] = getRandomIntLst(n);
      let lstSum: number = 0;
      let i: number = 0;
      let j: number = 0;
      lstSum = logLst(lst, n, i, j, targetNum);

      while (lstSum !== targetNum) {
        let keyInput = await waitForKeyPress();
        const keyResult = keyCtrl(keyInput.ctrl, keyInput.name, n, i, j);
        if (keyResult) {
          i = keyResult[0];
          j = keyResult[1];
          let newNumber = keyResult[2];
          if (newNumber !== -1) {
            lst[i][j] = newNumber;
          }
          lstSum = logLst(lst, n, i, j, targetNum);
        } else {
          break;
        }
      }
    }
  } while (!condition);
}
main();
