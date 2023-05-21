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

function AccessSection() {
  const { heading, description } = data;
  return (
    <Flex as="section" textAlign={['center']} padding={['16px']} flexDirection={['column']} pt={[24]} alignItems={['center']} gap={['13px']}>
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
      <Flex justifyContent={['flex-end']}>
        <Flex w={['max-content']} position={['relative']} transform={['translateX(5%)']}>
          <MobileMockup w={['62px']} h={['154.93px']} play />
          {/* <MobileMockup
            w={['55.86px', '75.86px']} h={['154.93px', '154.93px']} source="abc" /> */}
          <TabletMockup w={['250px']} h={['150px']} play />
          {/* <TabletMockup w={['220px', '271.02px']} h={['150px', '180.56px']} source="abc" /> */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AccessSection;
