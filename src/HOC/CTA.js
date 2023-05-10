import React from 'react'

const CTA = ({ heading, description }) => {
  return (
    <>
    <Text as="h1">{ heading }</Text>
      <Text as="p">{ description }</Text>
      <Box>
        <CallToActionButton>
          Download for iOS
        </CallToActionButton>
        <CallToActionButton>
          Download for Mac
        </CallToActionButton>
      </Box>
    </>
  );
};

export default CTA;
