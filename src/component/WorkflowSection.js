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
      padding={{ base: '16px', xs: '18px', sm: '36px' }}
      paddingTop={{ base: 24, xs: 36, sm: 40 }}
      alignItems={['center']}
      gap={['13px']}
    >
      <Flex flexDirection={['column']} gap={[3]} mt={{ base: '32px', xs: '50px', sm: '64px' }}>
        <TextDescription
          heading={heading}
          description={description}
          headingSize={{ base: '20px', xs: '26px', sm: '28px' }}
          descriptionSize={{ base: '14px', xs: '16px', sm: '18px' }}
          headingWeight={600}
          descriptionWeight={400}
          semanticTag="h2"
          buttonRequired={false}
        />
      </Flex>
      <UnorderedList w={['full']} margin={['auto']} display={['flex']} flexDirection={['column']} alignItems={['center']} gap={{ base: '40px', xs: '48px', sm: '56px' }} pt={['70px']}>
        {workflowList.map(({ CustomImage, title, description }) => (
          <ListItem display={['flex']} flexDirection={['column']} alignItems={['center']} key={title} gap={{ base: '30px', xs: '38px', sm: '44px' }}>
            <CustomImage w={['44px']} h={['40px']} />
            <Flex flexDirection={['column']} alignItems={['center']} gap={['14px']}>
              <TextDescription
                heading={title}
                description={description}
                headingSize={{ base: '18px', xs: '24px', sm: '26px' }}
                descriptionSize={{ base: '12px', xs: '16px', sm: '18px' }}
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
