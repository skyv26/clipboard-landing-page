import React from 'react';
import PropTypes from 'prop-types';
import { Image, Flex, Box } from '@chakra-ui/react';
import MobileTabletIcon from '../assets/mobile_tablet.png';
import GoViral from '../assets/GoViral_Wordpress.png';

const TabletMockup = ({w, h, color, play }) => (
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
      w={['50px']}
      position={['absolute']}
      zIndex={['50']}
      boxShadow={['0px 10px 20px 0px hsla(0, 0%, 0%, 0.3)']}
      top={['50%']}
      left={['50%']}
      transform={['translate(-50%,-50%)']}
    />
    <Flex position={['absolute']} width={['calc(100% - 4.05rem)']} left={['50%']} transform={['translateX(-50%)']} height={['calc(100% - 0.75rem)']} borderRadius={['1px']} overflow={['hidden']}>
      {!play ? (
        <Image src={GoViral} width={['full']} />
      ) : (
        <Box
          as="iframe"
          width={['full']}
          transform={['scale(1.6)']}
          pointerEvents={['none']}
          frameBorder={['0']}
          src="https://www.youtube.com/embed/3Q8u7nKKSiY?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=3Q8u7nKKSiY&rel=0"
          title="YouTube video player"
          allowfullscreen
        />
      )}
    </Flex>
  </Flex>
);

TabletMockup.defaultProps = {
  w: '',
  h: '',
  color: '',
  play: false,
};

TabletMockup.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
  play: PropTypes.bool,
};

export default TabletMockup;
