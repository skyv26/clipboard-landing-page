import React from 'react';
import { Box } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';
import Logo from '../svg_components/Logo';

const data = {
  heading: 'A history of everything you copy',
  description: 'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.',
};

function HeroSection() {
  const { heading, description } = data;
  return (
    <Box as="header">
      <Logo />
      <TextDescription heading={heading} description={description} />
    </Box>
  );
}

export default HeroSection;
