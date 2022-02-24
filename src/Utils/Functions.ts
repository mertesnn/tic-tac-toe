export const emptyBoxes = () => new Array(9).fill(null);

export const findEmtpyBoxes = (boxes: any[]) => {
  const box: (number | boolean)[] = [];
  boxes.forEach((item, index) => {
    if (item === null) box.push(index);
  });
  return box;
};
