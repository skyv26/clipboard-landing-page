import React from 'react';
import PropTypes from 'prop-types';
import { Image, Box, Flex } from '@chakra-ui/react';

const GreenTick = ({ w, h, color }) => (
  <Flex
    position={['absolute']}
    width={w}
    alignItems={['center']}
    justifyContent={['center']}
    height={h}
    top={['5%']}
    left={['35%']}
    transform={['translate(0,5%)']}
    zIndex={['10']}
  >
    <Image
      as="svg"
      viewBox="0 0 286 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Box as="rect" width={w} height={h} rx="8" fill={`${color.length === 0 ? 'white' : color}`} />
    </Image>
    <Box
      position={['absolute']}
      top={['50%']}
      left={['50%']}
      width="58"
      height="58"
      transform={['translate(-50%,-50%)']}
    >
      <Image
        as="svg"
        width="24"
        height="24"
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="#26BBA4" strokeWidth="1" />
        <Box as="path" d="M18.28 29.3298L25.0931 36.1429L40.236 21" stroke="#26BBA4" strokeWidth="1" />
      </Image>
    </Box>
  </Flex>
);

GreenTick.defaultProps = {
  w: '',
  h: '',
  color: '',
};
GreenTick.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
};

export default GreenTick;
