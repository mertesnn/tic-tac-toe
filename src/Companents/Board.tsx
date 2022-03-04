import { Button, Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { bestMove, checkWinner, emptyBoxes } from 'src/Utils/Functions';

const Board = () => {
  const [boxes, setBoxes] = useState<any[]>(emptyBoxes());
  const [turn, setTurn] = useState<string>('X');
  const [gameOver, setGameOver] = useState<number[] | undefined>(undefined);
  const [winner, setWinner] = useState<string | undefined>(undefined);
  const [difficulty, setDifficulty] = useState<number>(0);

  const reset = () => {
    setBoxes(emptyBoxes());
    setTurn('X');
    setGameOver(undefined);
    setWinner(undefined);
  };

  const changeDiff = () => {
    reset();
    setDifficulty(0);
  };

  const handleMove = (index: any) => {
    if (boxes[index] === null) {
      setTurn('X');
      boxes[index] = turn;
      setBoxes([...boxes]);
      if (boxes.includes(null)) {
        const best = bestMove(boxes, 'O', difficulty);

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
      <Text userSelect="none" display={difficulty ? 'block' : 'none'}>
        {!gameOver ? 'Always your turn :)' : 'Game Over!'}
      </Text>
      <Text display={!gameOver ? 'none' : 'block'}>
        {winner ? `${winner} won!` : 'Tie!'}
      </Text>
      <HStack display={!gameOver ? 'none' : 'block'}>
        <Button variant="outline" onClick={reset}>
          Reset
        </Button>
        <Button variant="outline" onClick={changeDiff}>
          Change Difficulty
        </Button>
      </HStack>
      <Grid
        display={difficulty ? 'grid' : 'none'}
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
      <Stack display={difficulty ? 'none' : 'flex'}>
        <Button
          variant="outline"
          onClick={() => setDifficulty(3)}
          display={'block'}
        >
          Normal
        </Button>
        <Button
          variant="outline"
          onClick={() => setDifficulty(5)}
          display={'block'}
        >
          Hard
        </Button>
        <Button
          variant="outline"
          onClick={() => setDifficulty(7)}
          display={'block'}
        >
          Impossible
        </Button>
      </Stack>
    </>
  );
};

export default Board;
