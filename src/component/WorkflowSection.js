import React from 'react';
import { Box, UnorderedList, List } from '@chakra-ui/react';
import TextDescription from '../HOC/TextDescription';
import SneakPreview from '../svg_components/SneakPreview';
import TextSnippet from '../svg_components/TextSnippet';
import BlackList from '../svg_components/BlackList';

const data = {
  heading: 'Supercharge your workflow',
  description: "We've got the tools to boost your productivity.",
};

function WorkflowSection() {
  const { heading, description } = data;

  const workflowList = [
    {
      CustomImage: BlackList,
      title: 'Create blacklists',
      description:
        'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.',
    },
    {
      CustomImage: TextSnippet,
      title: 'Plain text snippets',
      description:
        'Remove unwanted formatting from copied text for a consistent look.',
    },
    {
      CustomImage: SneakPreview,
      title: 'Sneak preview',
      description:
        'Quick preview of all snippets on your Clipboard for easy access.',
    },
  ];

  return (
    <Box as="section">
      <TextDescription
        heading={heading}
        description={description}
        semanticTag="h2"
        buttonRequired={false}
      />
      <UnorderedList>
        {workflowList.map(({ CustomImage, title, description }) => (
          <List key={title}>
            <CustomImage />
            <TextDescription
              heading={title}
              description={description}
              semanticTag="h3"
              buttonRequired={false}
            />
          </List>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default WorkflowSection;
