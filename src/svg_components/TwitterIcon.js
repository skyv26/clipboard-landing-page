import React from 'react';
import PropTypes from 'prop-types';

function TwitterIcon({ color }) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
        fill={`${color && (color.length !== 0) ? color : '#4C545C'}`}
        fillRule="nonzero"
      />
    </svg>
  );
}

TwitterIcon.defaultProps = {
  color: null,
};

TwitterIcon.propTypes = {
  color: PropTypes.string,
};

export default TwitterIcon;
