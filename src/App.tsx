import '@fontsource/montserrat';
import Theme from './Utils/Theme';
import { ChakraProvider, Container, Text } from '@chakra-ui/react';
import Footer from './Companents/Footer';
import Board from './Companents/Board';

const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Container
        h="100vh"
        bg="#141414"
        maxW="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize="6xl"
          userSelect="none"
          textAlign="center"
          bgGradient="linear(to-l, #FC6000, #FC9900)"
          bgClip="text"
        >
          Tic Tac Toe
        </Text>
        <Board />
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default App;
