import React from 'react';
import { Flex } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';

const data = {
  heading: 'Clipboard for iOS and Mac OS',
  description: 'Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.',
};

const CTASection = () => {
  const { heading, description } = data;
  return (
    <Flex
      as="section"
      flexDirection={['column']}
      padding={['16px']}
      pt={['104px']}
      alignItems={['center']}
      textAlign={['center']}
      gap={[3]}
      pb={['150px']}
    >
      <TextDescription
        heading={heading}
        description={description}
        headingSize={['24px']}
        descriptionSize={['13px']}
        headingWeight={600}
        descriptionWeight={400}
        buttonWeight={600}
      />
    </Flex>
  );
};

export default CTASection;
