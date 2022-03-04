import { winnableMoves } from './Constants';
type winner = {
  winner: string | undefined;
  move: number[] | undefined;
};
export const emptyBoxes = () => new Array(9).fill(null);

export const findEmtpyBoxes = (boxes: any[]) => {
  const box: (number | boolean)[] = [];
  boxes.forEach((item, index) => {
    if (item === null) box.push(index);
  });
  return box;
};

export const checkWinner = (boxes: any[]) => {
  const checkX: number[] = [];
  const checkO: number[] = [];
  let output: winner = {
    winner: undefined,
    move: undefined,
  };

  boxes.forEach((item, index) => {
    if (item === 'X') checkX.push(index);
    else if (item === 'O') checkO.push(index);
  });
  winnableMoves.forEach((item) => {
    if (item.every((elements) => checkX?.includes(elements))) {
      output.move = item;
      output.winner = 'X';
    } else if (item.every((elements) => checkO?.includes(elements))) {
      output.move = item;
      output.winner = 'O';
    }
  });

  return output;
};
