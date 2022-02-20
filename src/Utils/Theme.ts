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
      td: {
        padding: '50px !important',
        borderLeft: '1px',
        textAlign: 'center !important',
      },
      'td:nth-child(1)': {
        borderLeft: '0px',
      },
      'tr:nth-child(3) td': {
        borderBottom: '0px',
      },
    },
  },
  fonts: {
    body: 'Montserrat',
  },
});

export default Theme;
