import React from 'react'
import { Box } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';

const data = {
  heading: "Clipboard for iOS and Mac OS",
  description: "Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard."
};

const CTASection = () => {
  const { heading, description } = data;
  return (
    <Box as="header">
      <TextDescription heading={heading} description={description} />
    </Box>
  );
};

export default CTASection;
