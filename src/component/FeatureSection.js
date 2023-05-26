import React from 'react';
import { Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';
import FeatureImage from '../svg_components/FeatureImage';

const data = {
  heading: 'Keep track of your snippets',
  description:
    'Clipboard instantly stores any item you copy in the cloud,'
    + 'meaning you can access your snippets immediately on all your'
    + 'devices. Our Mac and iOS apps will help you organize everything.',
};

const featureList = [
  {
    title: 'Quick Search',
    description: 'Easily search your snippets by content, category, web address, application, and more.',
  },
  {
    title: 'iCloud Sync',
    description: 'Instantly saves and syncs snippets across all your devices.',
  },
  {
    title: 'Complete History',
    description: 'Retrieve any snippets from the first moment you started using the app.',
  },
];

const FeatureSection = () => {
  const { heading, description } = data;
  return (
    <Flex as="section" textAlign={['center']} padding={{ base: '16px', xs: '18px', sm: '36px' }} flexDirection={['column']} paddingTop={{ base: 24, xs: 36, sm: 40 }} gap={{ base: 12, xs: 16 }}>
      <Flex flexDirection={{ base: 'column' }} gap={{ base: 13, xs: '16px' }}>
        <TextDescription
          heading={heading}
          description={description}
          headingSize={{ base: 28 }}
          headingWeight={[600]}
          descriptionSize={{ base: 13, xs: 16 }}
          semanticTag="h2"
          buttonRequired={false}
        />
      </Flex>
      <Flex flexDirection={['column']} alignItems={['center']} gap={{ base: '35px', xs: '55px' }}>
        <FeatureImage mt={['35px']} w={['full']} h={['auto']} />
        <UnorderedList display={['flex']} flexDirection={['column']} alignItems={['center']} w={['full']} textAlign={['center']} m={['auto']} gap={{ base: 6, xs: 10, sm: 12 }}>
          {featureList.map((item) => (
            <ListItem key={item.title} display={['flex']} flexDirection={['column']} gap={['10px']}>
              <TextDescription
                heading={item.title}
                description={item.description}
                semanticTag="h3"
                headingSize={{ base: '20px', xs: '24px', sm: '26px' }}
                descriptionSize={{ base: '13px', xs: '16px', sm: '18px' }}
                headingWeight={600}
                descriptionWeight={400}
                buttonRequired={false}
              />
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  );
};

export default FeatureSection;
