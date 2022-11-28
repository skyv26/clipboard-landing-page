import React from 'react';
import { Box } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';

const data = {
  heading: 'Access Clipboard anywhere',
  description:
    'Whether you\'re on the go, or at your computer, you can access all your Clipboard'
    + 'snippets in a few simple clicks.',
};

function AccessSection() {
  const { heading, description } = data;
  return (
    <Box as="section" padding={['16px']}>
      <TextDescription heading={heading} description={description} buttonRequired={false} semanticTag="h2" />
    </Box>
  );
}

export default AccessSection;
