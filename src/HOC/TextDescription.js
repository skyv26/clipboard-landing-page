import React from 'react';
import { Flex, Text, Link as CallToActionButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TextDescription = ({
  heading, description, semanticTag, buttonRequired,
  headingWeight, descriptionWeight, buttonWeight,
  headingSize, descriptionSize,
}) => (
  <>
    <Text fontWeight={headingWeight} as={semanticTag} color="primary.900" fontSize={headingSize}>{ heading }</Text>
    <Text fontWeight={descriptionWeight} as="p" color="secondary.900" fontSize={descriptionSize} letterSpacing={{ base: '0.12px' }}>{ description }</Text>
    { buttonRequired && (
      <Flex color="white" fontSize={{ xs: '18px' }} w={['full']} mt={[6]} flexDirection={['column']} gap={{ base: 3, xs: 5 }}>
        <CallToActionButton fontWeight={buttonWeight} bgColor="buttonPrimary.900" py={['13px']} px={['50px']} borderRadius={['full']} boxShadow={['0 10px 20px 0px hsla(160, 64%, 72%, 0.5), 0px -3px 0px 0px hsla(0, 0%, 0%, 0.15) inset']}>
          Download for iOS
        </CallToActionButton>
        <CallToActionButton fontWeight={buttonWeight} bgColor="buttonSecondary.900" py={['13px']} px={['50px']} borderRadius={['full']} boxShadow={['0 10px 20px 0px hsla(0, 0%, 0%, 0.1), 0px -3px 0px 0px hsla(0, 0%, 0%, 0.15) inset']}>
          Download for Mac
        </CallToActionButton>
      </Flex>
    )}
  </>
);

TextDescription.defaultProps = {
  heading: '',
  description: '',
  descriptionWeight: '',
  headingWeight: '',
  buttonWeight: '',
  headingSize: '',
  descriptionSize: '',
  buttonRequired: true,
  semanticTag: 'h1',
};

TextDescription.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  headingWeight: PropTypes.string,
  descriptionWeight: PropTypes.string,
  descriptionSize: PropTypes.string,
  headingSize: PropTypes.string,
  buttonWeight: PropTypes.string,
  buttonRequired: PropTypes.bool,
  semanticTag: PropTypes.string,
};

export default TextDescription;
