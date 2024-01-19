import { lst, lstLen, blockPosition } from "../006_puzzleGame";

const keyCtrl = (keyInputCtrl: boolean, keyInputName: string): void => {
  if (!keyInputCtrl) {
    const { row, column }: { row: number; column: number } = blockPosition;
    switch (keyInputName) {
      case "up":
        if (row !== 0) {
          lst[row][column] = lst[row - 1][column];
          lst[row - 1][column] = " ";
          blockPosition.row--;
        }
        break;
      case "down":
        if (row !== lstLen - 1) {
          lst[row][column] = lst[row + 1][column];
          lst[row + 1][column] = " ";
          blockPosition.row++;
        }
        break;
      case "left":
        if (column !== 0) {
          lst[row][column] = lst[row][column - 1];
          lst[row][column - 1] = " ";
          blockPosition.column--;
        }
        break;
      case "right":
        if (column !== lstLen - 1) {
          lst[row][column] = lst[row][column + 1];
          lst[row][column + 1] = " ";
          blockPosition.column++;
        }
        break;
    }
  }
};

export default keyCtrl;
