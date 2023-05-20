import React from 'react';
import PropTypes from 'prop-types';
import { Image, Flex } from '@chakra-ui/react';
import MobileTabletIcon from '../assets/mobile_tablet.png';
import TestGif from '../assets/test.gif';

const TabletMockup = ({ w, h, color }) => (
  <Flex alignItems={['center']} position={['relative']}>
    <Image
      as="svg"
      width={w}
      height={h}
      // ml={['auto']}
      viewBox="0 0 706 475"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="706"
        height="475"
        rx="20"
        fill={`${color.length === 0 ? 'url(#paint0_linear_6_94)' : color}`}
      />
      <rect
        opacity="0.1"
        x="63"
        y="19"
        width="580.556"
        height="436.359"
        rx="5"
        fill="white"
      />
      <rect
        x="64.8849"
        y="20.8849"
        width="576.786"
        height="432.589"
        rx="3"
        fill="white"
      />
      <mask
        id="mask0_6_94"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="64"
        y="20"
        width="578"
        height="434"
      >
        <rect
          x="64.8849"
          y="20.8849"
          width="576.786"
          height="432.589"
          rx="3"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_6_94)">
        <rect x="40.0278" y="-332" width="604" height="888.776" fill="white" />
      </g>
      <circle
        cx="675.77"
        cy="236.77"
        r="3.76984"
        fill="url(#paint1_linear_6_94)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_94"
          x1="691.554"
          y1="475"
          x2="-31.6552"
          y2="5.1999"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop
            offset="0.979247"
            stopColor={`${color.length === 0 ? '#414141' : color}`}
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6_94"
          x1="683.159"
          y1="236.92"
          x2="675.92"
          y2="229.682"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop
            offset="1"
            stopColor={`${color.length === 0 ? '#4f4f4f' : color}`}
          />
        </linearGradient>
      </defs>
    </Image>
    <Image
      src={MobileTabletIcon}
      w={['50px', '75.86px']}
      position={['absolute']}
      zIndex={['50']}
      top={['50%']}
      left={['50%']}
      transform={['translate(-50%,-50%)']}
    />
    <Flex position={['absolute']} width={['calc(100% - 4rem)']} left={['50%']} transform={['translateX(-50%)']} height={['calc(100% - 0.75rem)']} borderRadius={['1px']}>
      <Image src={TestGif} />
    </Flex>
  </Flex>
);

TabletMockup.defaultProps = {
  w: '',
  h: '',
  color: '',
};

TabletMockup.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
};

export default TabletMockup;
