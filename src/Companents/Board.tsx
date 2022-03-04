import { Button, Grid, GridItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { checkWinner, emptyBoxes } from 'src/Utils/Functions';

const Board = () => {
  const [boxes, setBoxes] = useState<any[]>(emptyBoxes());
  const [turn, setTurn] = useState<string>('X');
  const [gameOver, setGameOver] = useState<number[] | undefined>(undefined);
  const [winner, setWinner] = useState<string | undefined>(undefined);

  const reset = () => {
    setBoxes(emptyBoxes());
    setTurn('X');
    setGameOver(undefined);
    setWinner(undefined);
  };

  const miniMax = () => {
    let randomMove = Math.round(Math.random() * 8);

    while (boxes[randomMove]) {
      randomMove = Math.round(Math.random() * 8);
    }
    boxes[randomMove] = 'O';
    setBoxes([...boxes]);
  };

  const bestMove = (boxes: any[], player: any) => {
    const opponent = player === 'X' ? 'O' : 'X';

    const ai = (boxes: any[], isMax: any) => {
      const winner = checkWinner(boxes)?.winner;
      if (winner === player) return { box: -1, score: 1 };
      if (winner === opponent) return { box: -1, score: -1 };
      if (!boxes.includes(null)) return { box: -1, score: 0 };

      const best = { box: -1, score: isMax ? -1000 : 1000 };

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i]) continue;

        boxes[i] = isMax ? player : opponent;

        const score = ai(boxes, !isMax).score;

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
      }
      return best;
    };
    return ai(boxes, true).box;
  };

  const handleMove = (index: any) => {
    if (boxes[index] === null) {
      setTurn('X');
      boxes[index] = turn;
      setBoxes([...boxes]);
      if (boxes.includes(null)) {
        const best = bestMove(boxes, 'O');

        if (best !== -1) {
          boxes[best] = 'O';
          setBoxes([...boxes]);
        }
      }
    }
  };

  useEffect(() => {
    const check = checkWinner(boxes);
    if (check?.winner) {
      setGameOver(check?.move);
      setWinner(check?.winner);
    }
    if (!boxes.includes(null) && !check?.winner) {
      setGameOver([9]);
    }
  }, [boxes]);

  return (
    <>
      <Text userSelect="none">
        {!gameOver ? 'Always your turn :)' : 'Game Over!'}
      </Text>
      <Text display={!gameOver ? 'none' : 'block'}>
        {winner ? `${winner} won!` : 'Tie!'}
      </Text>
      <Button
        variant="outline"
        onClick={reset}
        display={!gameOver ? 'none' : 'block'}
      >
        Reset
      </Button>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={{ base: '2', sm: '4', md: '6', lg: '8' }}
        maxW="xl"
        overflow="hidden"
      >
        {boxes
          ? boxes.map((item, index) => (
              <GridItem
                key={index}
                backgroundColor={
                  gameOver
                    ? gameOver.map((itm) => (index === itm ? 'green' : ''))
                    : ''
                }
                h={{ base: '80px', sm: '105px', md: '130px', lg: '150px' }}
                w={{ base: '80px', sm: '105px', md: '130px', lg: '150px' }}
                border="1px solid black"
                userSelect="none"
                fontSize="7xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={() => (!gameOver ? handleMove(index) : '')}
              >
                {item}
              </GridItem>
            ))
          : 'No Data.'}
      </Grid>
    </>
  );
};

export default Board;
