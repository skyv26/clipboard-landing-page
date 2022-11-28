import React from 'react';
import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Logo({ w, h }) {
  return (
    <Image as="svg" w={w} h={h} viewBox="0 0 125 125" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#26BBA4" strokeWidth="10" fill="none" fillRule="evenodd">
        <circle cx="62.5" cy="62.5" r="57.5" />
        <path
          d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
          strokeLinecap="round"
        />
      </g>
    </Image>
  );
}

Logo.defaultProps = {
  w: '128px',
  h: '128px',
};

Logo.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
};

export default Logo;
