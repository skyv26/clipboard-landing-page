import React from 'react';
import { Box, Text, Link as CallToActionButton } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TextDescription = ({
  heading, description, semanticTag, buttonRequired,
}) => (
  <>
    <Text as={semanticTag}>{ heading }</Text>
    <Text as="p">{ description }</Text>
    { buttonRequired && (
      <Box>
        <CallToActionButton>
          Download for iOS
        </CallToActionButton>
        <CallToActionButton>
          Download for Mac
        </CallToActionButton>
      </Box>
    )}
  </>
);

TextDescription.defaultProps = {
  heading: '',
  description: '',
  buttonRequired: true,
  semanticTag: 'h1',
};

TextDescription.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  buttonRequired: PropTypes.bool,
  semanticTag: PropTypes.string,
};

export default TextDescription;
