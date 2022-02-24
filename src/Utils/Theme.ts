import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        color: 'gray.800',
      },
      a: {
        fontSize: '2rem',
        _hover: {
          color: 'gray.300',
        },
      },
    },
  },
  fonts: {
    body: 'Montserrat',
  },
});

export default Theme;
