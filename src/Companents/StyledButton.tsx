import { Button, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionDiv = motion(Stack);

const StyledButton = ({ text, onClick }: DifficultyButton) => {
  return (
    <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="unstyled"
        border="1px"
        borderRadius="5px"
        color="gray.800"
        borderColor="#FC9900"
        padding="6"
        w="200px"
        transition="all 0.5s"
        onClick={onClick}
        bgGradient="linear(to-l, #FC6000, #FC9900)"
        bgClip="text"
        display="flex"
        _hover={{
          color: '#FC9900',
          borderColor: '#FC9900',
          transition: 'all 0.5s',
        }}
      >
        {text}
      </Button>
    </MotionDiv>
  );
};

export default StyledButton;
