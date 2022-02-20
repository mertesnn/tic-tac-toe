import '@fontsource/montserrat';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Theme from './Utils/Theme';
import {
  Box,
  ChakraProvider,
  Container,
  Link,
  Table,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';

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
        <Table maxW="xl">
          <Tr>
            <Td>1</Td>
            <Td>2</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>5</Td>
            <Td>6</Td>
          </Tr>
          <Tr>
            <Td>7</Td>
            <Td>8</Td>
            <Td>9</Td>
          </Tr>
        </Table>
        <Box
          p="3"
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="6"
        >
          <Link href="https://www.instagram.com/mertesen__/" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="https://github.com/mertesnn" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/mert-esen/" target="_blank">
            <FaLinkedinIn />
          </Link>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default App;
