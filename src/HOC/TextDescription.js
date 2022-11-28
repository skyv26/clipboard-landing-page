import React from 'react';
import { Box, Text, Link as CallToActionButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TextDescription = ({
  heading, description, semanticTag, buttonRequired,
  headingWeight, descriptionWeight, buttonWeight,
}) => (
  <>
    <Text fontWeight={headingWeight} as={semanticTag}>{ heading }</Text>
    <Text fontWeight={descriptionWeight} as="p">{ description }</Text>
    { buttonRequired && (
      <Box>
        <CallToActionButton fontWeight={buttonWeight}>
          Download for iOS
        </CallToActionButton>
        <CallToActionButton fontWeight={buttonWeight}>
          Download for Mac
        </CallToActionButton>
      </Box>
    )}
  </>
);

TextDescription.defaultProps = {
  heading: '',
  description: '',
  descriptionWeight: '',
  headingWeight: '',
  buttonWeight: '',
  buttonRequired: true,
  semanticTag: 'h1',
};

TextDescription.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  headingWeight: PropTypes.string,
  descriptionWeight: PropTypes.string,
  buttonWeight: PropTypes.string,
  buttonRequired: PropTypes.bool,
  semanticTag: PropTypes.string,
};

export default TextDescription;
