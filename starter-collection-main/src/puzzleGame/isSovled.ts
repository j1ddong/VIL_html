import { lst, lstLen } from "../006_puzzleGame";

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

export default isSolved;
