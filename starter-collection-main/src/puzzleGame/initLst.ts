import { lst, lstLen, blockPosition } from "../006_puzzleGame";

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
        blockPosition.row = i;
        blockPosition.column = j;
      } else {
        tempLst.push(randomNum);
      }
      uniqueNums.add(randomNum);
    }
    lst.push(tempLst);
  }
};

export default getRandomIntLst;
