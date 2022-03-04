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

export const bestMove = (boxes: any[], player: any, depth: number) => {
  const opponent = player === 'X' ? 'O' : 'X';

  const ai = (boxes: any[], isMax: any, depth: number) => {
    const winner = checkWinner(boxes)?.winner;
    if (winner === player) return { box: -1, score: 1 };
    if (winner === opponent) return { box: -1, score: -1 };
    if (!boxes.includes(null)) return { box: -1, score: 0 };

    const best = { box: -1, score: isMax ? -1000 : 1000 };

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i]) continue;

      boxes[i] = isMax ? player : opponent;
      if (depth !== 0) {
        const score = ai(boxes, !isMax, depth - 1).score;
        boxes[i] = null;

        if (isMax) {
          if (score > best.score) {
            best.score = score;
            best.box = i;
          }
        } else {
          if (score < best.score) {
            best.score = score;
            best.box = i;
          }
        }
      } else {
        boxes[i] = null;
        continue;
      }
    }
    return best;
  };
  return ai(boxes, true, depth).box;
};
