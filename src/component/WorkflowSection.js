import React from 'react';
import { UnorderedList, Flex, ListItem } from '@chakra-ui/react';
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
    <Flex
      as="section"
      textAlign={['center']}
      flexDirection={['column']}
      padding={['16px']}
      pt={[24]}
      alignItems={['center']}
      gap={['13px']}
    >
      <TextDescription
        heading={heading}
        description={description}
        headingSize={['20px']}
        descriptionSize={['13px']}
        headingWeight={600}
        descriptionWeight={400}
        semanticTag="h2"
        buttonRequired={false}
      />
      <UnorderedList w={['full']} margin={['auto']} display={['flex']} flexDirection={['column']} alignItems={['center']} gap={['40px']} pt={['70px']}>
        {workflowList.map(({ CustomImage, title, description }) => (
          <ListItem display={['flex']} flexDirection={['column']} alignItems={['center']} key={title} gap={['30px']}>
            <CustomImage w={['44px']} h={['40px']} />
            <Flex flexDirection={['column']} alignItems={['center']} gap={['14px']}>
              <TextDescription
                heading={title}
                description={description}
                headingSize={['18px']}
                descriptionSize={['12px']}
                headingWeight={600}
                descriptionWeight={400}
                semanticTag="h3"
                buttonRequired={false}
              />
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}

export default WorkflowSection;
