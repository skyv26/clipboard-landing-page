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

function FeatureSection() {
  const { heading, description } = data;
  return (
    <Flex as="section" textAlign={['center']} padding={['16px']} flexDirection={['column']} pt={[24]} gap={['13px']}>
      <TextDescription
        heading={heading}
        description={description}
        headingSize={[28]}
        headingWeight={[600]}
        descriptionSize={[13]}
        semanticTag="h2"
        buttonRequired={false}
      />
      <Flex flexDirection={['column']} alignItems={['center']} gap={['35px']}>
        <FeatureImage mt={['35px']} />
        <UnorderedList display={['flex']} flexDirection={['column']} alignItems={['center']} w={['full']} textAlign={['center']} m={['auto']} gap={[6]}>
          {featureList.map((item) => (
            <ListItem key={item.title} display={['flex']} flexDirection={['column']} gap={['10px']}>
              <TextDescription
                heading={item.title}
                description={item.description}
                semanticTag="h3"
                headingSize={['20px']}
                descriptionSize={['13px']}
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
}

export default FeatureSection;
