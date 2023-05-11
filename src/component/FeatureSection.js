import React from 'react';
import { Box, Image, UnorderedList, List } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';
import FeatureImage from '../svg_components/FeatureImage';

const data = {
  heading: 'Keep track of your snippets',
  description:
    'Clipboard instantly stores any item you copy in the cloud,\
    meaning you can access your snippets immediately on all your\
    devices. Our Mac and iOS apps will help you organize everything.',
};

const featureList = [
  {
    title: 'Quick Search',
    description: 'Easily search your snippets by content, category, web address, application, and more.'
  },
  {
    title: 'iCloud Sync',
    description: 'Instantly saves and syncs snippets across all your devices.'
  },
  {
    title: 'Complete History',
    description: 'Retrieve any snippets from the first moment you started using the app.'
  }
];

const FeatureSection = () => {
  const { heading, description } = data;
  return (
    <Box as="section">
      <TextDescription
        heading={heading}
        description={description}
        semanticTag="h2"
        buttonRequired={false}
      />
      <Box>
        <FeatureImage />
      </Box>
      <UnorderedList>
        {featureList.map((item, index) => (
            <TextDescription key={index} heading={item.title} description={item.description} semanticTag="h3" buttonRequired={false} />
          ))}
      </UnorderedList>
    </Box>
  );
};

export default FeatureSection;
