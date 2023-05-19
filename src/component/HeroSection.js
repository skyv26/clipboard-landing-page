import React from 'react';
import { Flex } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';
import Logo from '../svg_components/Logo';
import MobileHeaderBg from '../assets/bg-header-mobile.png';

const data = {
  heading: 'A history of everything you copy',
  description: 'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.',
};

function HeroSection() {
  const { heading, description } = data;
  return (
    <Flex as="header" padding={['18px']} pt={[24]} flexDirection={['column']} bgImage={[MobileHeaderBg]} bgRepeat={['no-repeat']} alignItems={['center']} textAlign={['center']}>
      <Logo w={['100px', '125px']} h={['100px', '125px']} />
      <Flex flexDirection={['column']} gap={[3]} mt={['32px']}>
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
    </Flex>
  );
}

export default HeroSection;
