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
        bgGradient="linear(to-l, #FC7000, #FC9900)"
        maxW="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="5xl">Tic Tac Toe</Text>
        <Board />
        <Footer />
      </Container>
    </ChakraProvider>
  );
};

export default App;
