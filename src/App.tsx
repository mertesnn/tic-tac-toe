import '@fontsource/montserrat';
import Theme from './Utils/Theme';
import { ChakraProvider, Container, Text } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Container centerContent>
        <Text fontSize="5xl">Tic Tac Toe</Text>
      </Container>
    </ChakraProvider>
  );
};

export default App;
