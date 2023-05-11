import React from 'react';
import { Box } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';

const data = {
  heading: 'Keep track of your snippets',
  description:
    'Clipboard instantly stores any item you copy in the cloud,\
    meaning you can access your snippets immediately on all your\
    devices. Our Mac and iOS apps will help you organize everything.',
};

const FeatureSection = () => {
  return (
    <Box as="section">
      <TextDescription
        heading={heading}
        description={description}
        semanticTag="h2"
        buttonRequired={false}
      />
    </Box>
  );
};

export default FeatureSection;
