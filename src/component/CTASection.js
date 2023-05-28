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
      padding={{ base: '18px', sm: '36px' }}
      pt={{ base: 24, xs: 28, sm: 36 }}
      alignItems={['center']}
      textAlign={['center']}
      gap={[3]}
      pb={{ base: '150px', xs: '170px', sm: '170px' }}
    >
      <TextDescription
        heading={heading}
        description={description}
        headingSize={{ base: '24px', xs: '30px', sm: '34px', md: '35px' }}
        descriptionSize={{ base: '13px', xs: '17px', sm: '18.5px', md: '20px' }}
        headingWeight={600}
        descriptionWeight={400}
        buttonWeight={600}
      />
    </Flex>
  );
};

export default CTASection;
