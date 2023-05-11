import React from 'react'
import { Box, UnorderedList, List } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';
import SneakPreview from '../svg_components/SneakPreview';
import TextSnippet from '../svg_components/TextSnippet';

const data = {
  heading: 'Keep track of your snippets',
  description:
    'Clipboard instantly stores any item you copy in the cloud,\
    meaning you can access your snippets immediately on all your\
    devices. Our Mac and iOS apps will help you organize everything.',
};


const WorkflowSection = () => {
  const { heading, description } = data;
  
  const workflowList = [
    {
      CustomImage: SneakPreview,
      title: 'Quick Search',
      description: 'Easily search your snippets by content, category, web address, application, and more.'
    },
    {
      CustomImage: TextSnippet,
      title: 'iCloud Sync',
      description: 'Instantly saves and syncs snippets across all your devices.'
    },
    {
      CustomImage: SneakPreview,
      title: 'Complete History',
      description: 'Retrieve any snippets from the first moment you started using the app.'
    }
  ];

  return (
    <Box as="section" >
      <TextDescription  heading={heading} description={description} semanticTag='h2' buttonRequired={false} />
      <UnorderedList>
      {workflowList.map(({ CustomImage, title, description }, index) => (
        <List key={index}>
          { <CustomImage /> }
          <TextDescription heading={title} description={description} semanticTag="h3" buttonRequired={false} />
        </List>
      ))}
      </UnorderedList>
    </Box>
  );
};

export default WorkflowSection;
