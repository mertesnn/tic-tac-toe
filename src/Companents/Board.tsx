import { Button, Grid, GridItem, Text } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { winnableMoves } from 'src/Utils/Constants';
import { emptyBoxes, findEmtpyBoxes } from 'src/Utils/Functions';

const Board = () => {
  const [boxes, setBoxes] = useState<any[]>(emptyBoxes());
  const [turn, setTurn] = useState<string>('X');
  const [gameOver, setGameOver] = useState<number[] | undefined>(undefined);
  const moveTurn = useRef<HTMLParagraphElement | null>(null);
  const board = useRef<HTMLDivElement | null>(null);

  const checkWinner = () => {
    const checkX: number[] = [];
    const checkO: number[] = [];
    let output;

    boxes.forEach((item, index) => {
      if (item === 'X') checkX.push(index);
      else if (item === 'O') checkO.push(index);
    });

    winnableMoves.forEach((item) => {
      if (item.every((elements) => checkX?.includes(elements))) output = item;
      else if (item.every((elements) => checkO?.includes(elements)))
        output = item;
    });

    return output;
  };

  const reset = () => {
    setBoxes(emptyBoxes());
    setTurn('X');
    setGameOver(undefined);
  };

  const handleMove = (index: any) => {
    if (boxes[index] === null) {
      setTurn(turn === 'X' ? 'O' : 'X');
      boxes[index] = turn;
      setBoxes([...boxes]);
      if (findEmtpyBoxes(boxes).length === 0) {
        setGameOver([10]);
      } else {
        const result = checkWinner();
        if (result) {
          setGameOver(result);
        }
      }
    }
  };

  return (
    <>
      <Text userSelect="none">
        {turn === 'X' || turn === 'O' ? 'Turn: ' : ''}
        <Text as="span" ref={moveTurn}>
          {turn}
        </Text>
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
        ref={board}
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
