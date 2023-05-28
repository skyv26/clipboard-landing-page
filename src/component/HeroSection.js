import React from 'react';
import { Flex } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';
import Logo from '../svg_components/Logo';
import MobileHeaderBg from '../assets/bg-header-mobile.png';

const data = {
  heading: 'A history of everything you copy',
  description: 'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.',
};

const HeroSection = () => {
  const { heading, description } = data;
  return (
    <Flex
      as="header"
      padding={{ base: '18px', sm: '36px' }}
      pt={{ base: 24, xs: 28, sm: 36 }}
      flexDirection={['column']}
      bgImage={[MobileHeaderBg]}
      bgRepeat={['no-repeat']}
      bgSize={['cover']}
      alignItems={['center']}
      textAlign={['center']}
    >
      <Logo w={['100px', '125px']} h={['100px', '125px']} />
      <Flex flexDirection={['column']} gap={[3]} mt={{ base: '32px', xs: '50px', sm: '64px' }}>
        <TextDescription
          heading={heading}
          description={description}
          headingSize={{
            base: '24px',
            xs: '30px',
            sm: '32px',
            md: '35px',
          }}
          descriptionSize={{ base: '13px', xs: '17px', sm: '18.5px', md: '20px' }}
          headingWeight={600}
          descriptionWeight={400}
          buttonWeight={600}
        />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
