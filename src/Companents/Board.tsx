import { Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { bestMove, checkWinner, emptyBoxes } from 'src/Utils/Functions';
import StyledButton from './StyledButton';

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

  const MotionDiv = motion(Stack);

  return (
    <>
      <Text
        userSelect="none"
        display={difficulty ? 'block' : 'none'}
        bgGradient="linear(to-l, #FC6000, #FC9900)"
        bgClip="text"
      >
        {!gameOver ? 'Always your turn :)' : 'Game Over!'}
      </Text>
      <Text
        display={!gameOver ? 'none' : 'block'}
        bgGradient="linear(to-l, #FC6000, #FC9900)"
        bgClip="text"
      >
        {winner ? `${winner} won!` : 'Tie!'}
      </Text>

      <Grid
        display={difficulty ? 'grid' : 'none'}
        templateColumns="repeat(3, 1fr)"
        gap={{ base: '2', sm: '4', md: '6', lg: '8' }}
        maxW="xl"
      >
        {boxes
          ? boxes.map((item, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-id={index}
              >
                <GridItem
                  backgroundColor={
                    gameOver
                      ? gameOver.map((itm) => (index === itm ? '#149414' : ''))
                      : ''
                  }
                  h={{ base: '80px', sm: '105px', md: '130px', lg: '150px' }}
                  w={{ base: '80px', sm: '105px', md: '130px', lg: '150px' }}
                  border="1px"
                  borderColor="gray.700"
                  color="gray.700"
                  borderRadius="5"
                  userSelect="none"
                  fontSize="7xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor={gameOver ? 'default' : 'pointer'}
                  onClick={() => (!gameOver ? handleMove(index) : '')}
                >
                  {item}
                </GridItem>
              </MotionDiv>
            ))
          : 'No Data.'}
      </Grid>

      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap="7"
      >
        <GridItem display={gameOver ? 'grid' : 'none'}>
          <StyledButton text="Reset" onClick={reset} />
        </GridItem>
        <GridItem display={gameOver ? 'grid' : 'none'}>
          <StyledButton text="Change Difficulty" onClick={changeDiff} />
        </GridItem>
      </Grid>
      <Box display={difficulty ? 'none' : 'block'}>
        <Text
          textAlign="center"
          userSelect="none"
          fontSize="3xl"
          mb="10"
          bgGradient="linear(to-l, #FC6000, #FC9900)"
          bgClip="text"
        >
          Choose Difficulty
        </Text>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap="7"
        >
          <GridItem m="auto">
            <StyledButton text="Normal" onClick={() => setDifficulty(5)} />
          </GridItem>
          <GridItem m="auto">
            <StyledButton text="Hard" onClick={() => setDifficulty(7)} />
          </GridItem>
          <GridItem m="auto">
            <StyledButton text="Impossible" onClick={() => setDifficulty(9)} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Board;
