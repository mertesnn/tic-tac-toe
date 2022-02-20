import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    Text: 'Montserrat',
  },
});

export default Theme;
