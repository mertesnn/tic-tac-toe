import { Box, Link } from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      p="3"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="6"
    >
      <Link
        href="https://www.instagram.com/mertesen__/"
        target="_blank"
        color="#FC9900"
      >
        <FaInstagram />
      </Link>
      <Link href="https://github.com/mertesnn" target="_blank" color="#FC9900">
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mert-esen/"
        target="_blank"
        color="#FC9900"
      >
        <FaLinkedinIn />
      </Link>
    </Box>
  );
};

export default Footer;
