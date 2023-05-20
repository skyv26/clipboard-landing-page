import React from 'react';
import { Flex } from '@chakra-ui/react';
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
    <Flex as="section" textAlign={['center']} padding={['16px']} flexDirection={['column']} pt={[24]} gap={['13px']}>
      <TextDescription
        heading={heading}
        description={description}
        headingSize={['20px']}
        descriptionSize={['13px']}
        headingWeight={600}
        descriptionWeight={400}
        buttonRequired={false}
        semanticTag="h2"
      />
    </Flex>
  );
}

export default AccessSection;
