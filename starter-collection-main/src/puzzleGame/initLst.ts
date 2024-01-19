import { lst, lstLen, blockPosition } from "../006_puzzleGame";
import keyCtrl from "./keyCtrl";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const getIntLst = (): void => {
  const maxNum = lstLen * lstLen;
  blockPosition.row = lstLen - 1;
  blockPosition.column = lstLen - 1;
  for (let i = 0; i < lstLen; i++) {
    const tempLst: (number | string)[] = [];
    for (let j = 0; j < lstLen; j++) {
      const tempNum = i * lstLen + j + 1;
      if (tempNum == maxNum) {
        tempLst.push(" ");
      } else {
        tempLst.push(tempNum);
      }
    }
    lst.push(tempLst);
  }
};

const numToDirection = (randomNum: number): string => {
  switch (randomNum) {
    case 1:
      return "up";
    case 2:
      return "down";
    case 3:
      return "right";
    case 4:
      return "left";
  }
  return "";
};

const makeRandomIntLst = (): void => {
  getIntLst();
  let shuffleNums: number = 100;
  while (shuffleNums) {
    const randomNum = getRandomInt(4);
    const direction = numToDirection(randomNum);
    keyCtrl(false, direction);
    shuffleNums--;
  }
};

export default makeRandomIntLst;
