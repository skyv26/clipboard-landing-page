import React from 'react';
import { Image, Flex, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import MobileTabletIcon from '../assets/mobile_tablet.png';
import TestGif from '../assets/test.gif';

const MobileMockup = ({ w, h, color }) => (
  <Box position={['absolute']} zIndex={['100']} bottom={['0']} transform={['translateX(-22%)']}>
    <Flex position={['relative']} alignItems={['center']} left={['50%']} transform={['translate(-50%,9%)']}>
      <Image
        as="svg"
        width={w}
        height={h}
        viewBox="0 0 198 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="198" height="404" fill="transparent" />
        <g id="Group 29">
          <g id="Group 6">
            <g id="Group 28">
              <g id="Rectangle" filter="url(#filter0_d_0_1)">
                <rect
                  x="-217"
                  width="197.635"
                  height="403.805"
                  rx="25"
                  fill="url(#paint0_linear_0_1)"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="Frame 3">
          <rect
            id="Rectangle 4"
            width="198"
            height="404"
            rx="26"
            fill="url(#paint1_linear_0_1)"
          />
          <ellipse
            id="Oval"
            cx="99.0021"
            cy="383.018"
            rx="12.0021"
            ry="12.018"
            fill="url(#paint2_linear_0_1)"
            stroke="#2D2D2D"
            strokeWidth="2"
          />
          <ellipse
            id="Oval_2"
            opacity="0.25"
            cx="96.2006"
            cy="21.2048"
            rx="3.20056"
            ry="3.2048"
            fill="#8B8E96"
          />
          <g id="Bitmap">
            <rect
              id="Mask"
              opacity="0.15"
              x="8"
              y="40"
              width="182.432"
              height="323.685"
              rx="3"
              fill="black"
            />
            <mask
              id="mask0_0_1"
              style={{ maskType: 'luminance' }}
              maskUnits="userSpaceOnUse"
              x="8"
              y="40"
              width="183"
              height="324"
            >
              <rect
                id="Mask_2"
                x="8"
                y="40"
                width="182.432"
                height="323.685"
                rx="3"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect
                id="Bitmap_2"
                x="-146.514"
                y="40"
                width="430.234"
                height="323.385"
                fill="black"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_0_1"
            x="-261"
            y="-10"
            width="297.635"
            height="503.805"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="6" dy="40" />
            <feGaussianBlur stdDeviation="25" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.24346 0 0 0 0 0.279313 0 0 0 0 0.375399 0 0 0 0.116723 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="75.5052"
            y1="209.967"
            x2="-230.641"
            y2="60.1295"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop
              offset="1"
              stopColor={`${color.length === 0 ? '#4F4F4F' : color}`}
            />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="99"
            y1="0"
            x2="99"
            y2="404"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={`${color.length === 0 ? '#2E2E2E' : color}`} />
            <stop
              offset="1"
              stopColor={`${color.length === 0 ? '#151515' : color}`}
            />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_1"
            x1="123.006"
            y1="383.018"
            x2="98.9704"
            y2="359.014"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop
              offset="1"
              stopColor={`${color.length === 0 ? '#6D6D6D' : color}`}
            />
          </linearGradient>
        </defs>
      </Image>
      <Image
        src={MobileTabletIcon}
        w={['35px']}
        position={['absolute']}
        left={['50%']}
        zIndex={['150']}
        transform={['translateX(-50%)']}
      />
      <Flex position={['absolute']} width={['calc(100% - 5px)']} left={['50%']} transform={['translateX(-50%)']} height={['calc(100% - 53px)']} borderRadius={['1px']}>
        <Image src={TestGif} />
      </Flex>
    </Flex>
  </Box>
);

MobileMockup.defaultProps = {
  w: '',
  h: '',
  color: '',
};

MobileMockup.propTypes = {
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
};

export default MobileMockup;
