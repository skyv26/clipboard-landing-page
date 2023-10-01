import React from 'react'
import { Box } from '@chakra-ui/react';
import CTA from '../HOC/CTA';
import Logo from '../svg_components/Logo';

const data = {
  heading: "A history of everything you copy",
  description: "Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
};

const HeroSection = () => {
  const { heading, description } = data;
  return (
    <Box as="section">
      <Logo />
      <CTA heading description />
    </Box>
  )
};

export default HeroSection;
