import React from 'react';
import { Flex } from '@chakra-ui/react';
import MobileMockup from '../svg_components/MobileMockup';
import TabletMockup from '../svg_components/TabletMockup';
import TextDescription from '../HOC/TextDescription';

const data = {
  heading: 'Access Clipboard anywhere',
  description:
    'Whether you\'re on the go, or at your computer, you can access all your Clipboard'
    + 'snippets in a few simple clicks.',
};

const AccessSection = () => {
  const { heading, description } = data;
  return (
    <Flex as="section" textAlign={['center']} padding={{ base: '16px', xs: '18px', sm: '36px' }} flexDirection={['column']} paddingTop={{ base: 24, xs: 36, sm: 40 }} gap={{ base: 12, xs: 16 }} alignItems={{ base: 'center' }}>
      <Flex flexDirection={['column']} gap={[3]} mt={{ base: '32px', xs: '50px', sm: '64px' }}>
        <TextDescription
          heading={heading}
          description={description}
          headingSize={{ base: '20px', xs: '26px', sm: '28px', md: '35px' }}
          descriptionSize={{ base: '14px', xs: '16px', sm: '18px', md: '20px' }}
          headingWeight={[600]}
          descriptionWeight={{ base: 400 }}
          buttonRequired={false}
          semanticTag="h2"
        />
      </Flex>
      <Flex justifyContent={['flex-end']}>
        <Flex w={['max-content']} position={['relative']} transform={{ base: 'translateX(5%) scale(1)', xs: 'translateX(5%) scale(1.05)', sm: 'translateX(5%) scale(1.25)' }}>
          <MobileMockup w={{ base: '62px' }} h={{ base: '154.93px' }} />
          <TabletMockup w={{ base: '250px' }} h={{ base: '150px' }} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AccessSection;
