import React from 'react';
import { Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function TextSnippet({ w, h, color }) {
  return (
    <Image
      as="svg"
      width={w}
      height={h}
      viewBox="0 0 36 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
        fill={`${color && (color.length !== 0) ? color : '#9EABB2'}`}
        fillRule="nonzero"
      />
    </Image>
  );
}

TextSnippet.defaultProps = {
  h: '',
  w: '',
  color: null,
};

TextSnippet.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
};

export default TextSnippet;
