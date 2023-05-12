import React from 'react';
import PropTypes from 'prop-types';

const VectorGraphics = ({ color }) => {
  return (
    <svg
      viewBox="0 0 125 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9083 29.6533C23.1419 29.6533 29.8165 23.0152 29.8165 14.8266C29.8165 6.63811 23.1419 0 14.9083 0C6.67465 0 0 6.63811 0 14.8266C0 23.0152 6.67465 29.6533 14.9083 29.6533ZM66.5138 13.0383C65.9388 13.6953 65.2294 14.2153 64.3853 14.5985C63.5413 14.9818 62.5688 15.1734 61.4679 15.1734C60.4648 15.1734 59.5382 15.0091 58.6881 14.6807C57.8379 14.3522 57.1009 13.8869 56.4771 13.2847C55.8532 12.6825 55.3639 11.9617 55.0092 11.1223C54.6544 10.2828 54.4771 9.35828 54.4771 8.34854C54.4771 7.31447 54.6575 6.37774 55.0183 5.53832C55.3792 4.6989 55.8777 3.98419 56.5138 3.39416C57.1498 2.80413 57.896 2.35097 58.7523 2.03467C59.6086 1.71837 60.5321 1.56022 61.5229 1.56022C62.4404 1.56022 63.3425 1.72141 64.2294 2.0438C65.1162 2.36618 65.8349 2.83759 66.3853 3.45803L64.2569 5.57482C63.9633 5.17336 63.578 4.87531 63.1009 4.68066C62.6238 4.48601 62.1346 4.38869 61.633 4.38869C61.0826 4.38869 60.578 4.48905 60.1193 4.68978C59.6605 4.89051 59.2661 5.16727 58.9358 5.52007C58.6055 5.87287 58.3486 6.28954 58.1651 6.77007C57.9817 7.25061 57.8899 7.77676 57.8899 8.34854C57.8899 8.93248 57.9817 9.46776 58.1651 9.95438C58.3486 10.441 58.6024 10.8577 58.9266 11.2044C59.2508 11.5511 59.6391 11.8218 60.0917 12.0164C60.5443 12.2111 61.0398 12.3084 61.578 12.3084C62.2018 12.3084 62.7462 12.1867 63.211 11.9434C63.6758 11.7001 64.0489 11.3838 64.3303 10.9945L66.5138 13.0383ZM34.4587 14.8266H37.5963L42.6055 1.90693H39.1376L36.1468 11.0675H36.0734L33.0642 1.90693H29.5413L34.4587 14.8266ZM43.8073 1.90693V14.8266H52.8716V12.1624H46.8349V9.47993H52.2294V6.97993H46.8349V4.55292H52.5413V1.90693H43.8073ZM73.4404 14.8266V4.57117H77.1101V1.90693H66.633V4.57117H70.3027V14.8266H73.4404ZM91.6697 8.31204C91.6697 9.33395 91.4924 10.2676 91.1376 11.1131C90.7829 11.9586 90.2905 12.6825 89.6606 13.2847C89.0306 13.8869 88.2813 14.3522 87.4128 14.6807C86.5443 15.0091 85.6025 15.1734 84.5872 15.1734C83.5719 15.1734 82.633 15.0091 81.7706 14.6807C80.9082 14.3522 80.1621 13.8869 79.5321 13.2847C78.9021 12.6825 78.4098 11.9586 78.055 11.1131C77.7003 10.2676 77.5229 9.33395 77.5229 8.31204C77.5229 7.27798 77.7003 6.34429 78.055 5.51095C78.4098 4.67761 78.9021 3.96898 79.5321 3.38504C80.1621 2.80109 80.9082 2.35097 81.7706 2.03467C82.633 1.71837 83.5719 1.56022 84.5872 1.56022C85.6025 1.56022 86.5443 1.71837 87.4128 2.03467C88.2813 2.35097 89.0306 2.80109 89.6606 3.38504C90.2905 3.96898 90.7829 4.67761 91.1376 5.51095C91.4924 6.34429 91.6697 7.27798 91.6697 8.31204ZM88.0367 6.7427C88.2202 7.22932 88.3119 7.75243 88.3119 8.31204C88.3119 8.89599 88.2202 9.4343 88.0367 9.92701C87.8532 10.4197 87.5963 10.8425 87.2661 11.1953C86.9358 11.5481 86.5443 11.8248 86.0917 12.0255C85.6391 12.2263 85.1376 12.3266 84.5872 12.3266C84.0367 12.3266 83.5352 12.2263 83.0826 12.0255C82.63 11.8248 82.2416 11.5481 81.9174 11.1953C81.5933 10.8425 81.3395 10.4197 81.156 9.92701C80.9725 9.4343 80.8807 8.89599 80.8807 8.31204C80.8807 7.75243 80.9694 7.22932 81.1468 6.7427C81.3242 6.25608 81.578 5.83942 81.9083 5.4927C82.2385 5.14598 82.63 4.87226 83.0826 4.67153C83.5352 4.4708 84.0367 4.37044 84.5872 4.37044C85.1376 4.37044 85.6422 4.4708 86.1009 4.67153C86.5596 4.87226 86.9511 5.14598 87.2752 5.4927C87.5994 5.83942 87.8532 6.25608 88.0367 6.7427ZM100.835 14.8266L98.0275 9.6989H96.9633V14.8266H93.8807V1.90693H98.8349C99.4587 1.90693 100.067 1.9708 100.661 2.09854C101.254 2.22628 101.786 2.44221 102.257 2.74635C102.728 3.05049 103.104 3.45194 103.385 3.95073C103.667 4.44952 103.807 5.06995 103.807 5.81204C103.807 6.68796 103.569 7.42396 103.092 8.02007C102.615 8.61618 101.954 9.04197 101.11 9.29745L104.505 14.8266H100.835ZM100.514 5.12774C100.642 5.3163 100.706 5.56265 100.706 5.86679C100.706 6.19526 100.636 6.46289 100.495 6.66971C100.355 6.87652 100.174 7.03467 99.9541 7.14416C99.7339 7.25365 99.4893 7.32968 99.2202 7.37226C98.9511 7.41484 98.6881 7.43613 98.4312 7.43613H96.945V4.42518H98.6147C98.8471 4.42518 99.0887 4.44343 99.3394 4.47993C99.5902 4.51642 99.8165 4.58637 100.018 4.68978C100.22 4.79319 100.385 4.93917 100.514 5.12774ZM42.6972 28.8686C42.0612 29.1971 41.318 29.4647 40.4679 29.6715C39.6177 29.8783 38.6911 29.9818 37.6881 29.9818C36.6483 29.9818 35.6911 29.8175 34.8165 29.4891C33.9419 29.1606 33.1896 28.6983 32.5596 28.1022C31.9297 27.5061 31.4373 26.7914 31.0826 25.958C30.7278 25.1247 30.5505 24.1971 30.5505 23.1752C30.5505 22.1411 30.7309 21.2044 31.0917 20.365C31.4526 19.5255 31.9511 18.8108 32.5872 18.2208C33.2232 17.6308 33.9694 17.1776 34.8257 16.8613C35.682 16.545 36.6055 16.3869 37.5963 16.3869C38.6239 16.3869 39.578 16.542 40.4587 16.8522C41.3395 17.1624 42.055 17.5791 42.6055 18.1022L40.6239 20.3467C40.318 19.9939 39.9144 19.705 39.4128 19.4799C38.9113 19.2549 38.3425 19.1423 37.7064 19.1423C37.156 19.1423 36.6483 19.2427 36.1835 19.4434C35.7187 19.6442 35.315 19.924 34.9725 20.2828C34.63 20.6417 34.3639 21.0675 34.1743 21.5602C33.9847 22.0529 33.8899 22.5912 33.8899 23.1752C33.8899 23.7713 33.9755 24.3187 34.1468 24.8175C34.318 25.3163 34.5719 25.7451 34.9083 26.104C35.2447 26.4629 35.6605 26.7427 36.156 26.9434C36.6514 27.1442 37.2171 27.2445 37.8532 27.2445C38.2202 27.2445 38.5688 27.2172 38.8991 27.1624C39.2294 27.1077 39.5352 27.0195 39.8165 26.8978V24.5438H37.3395V22.0255H42.6972V28.8686ZM49.5505 24.5255L52.3578 29.6533H56.0275L52.633 24.1241C53.4771 23.8686 54.1376 23.4428 54.6147 22.8467C55.0917 22.2506 55.3303 21.5146 55.3303 20.6387C55.3303 19.8966 55.1896 19.2762 54.9083 18.7774C54.6269 18.2786 54.2508 17.8771 53.7798 17.573C53.3089 17.2689 52.7768 17.0529 52.1835 16.9252C51.5902 16.7974 50.9817 16.7336 50.3578 16.7336H45.4037V29.6533H48.4862V24.5255H49.5505ZM52.2294 20.6934C52.2294 20.3893 52.1651 20.1429 52.0367 19.9544C51.9083 19.7658 51.7431 19.6198 51.5413 19.5164C51.3394 19.413 51.1132 19.3431 50.8624 19.3066C50.6116 19.2701 50.37 19.2518 50.1376 19.2518H48.4679V22.2628H49.9541C50.211 22.2628 50.474 22.2415 50.7431 22.1989C51.0122 22.1563 51.2569 22.0803 51.4771 21.9708C51.6973 21.8613 51.8777 21.7032 52.0183 21.4964C52.159 21.2895 52.2294 21.0219 52.2294 20.6934ZM65.5046 27.1168L66.5138 29.6533H70L64.6055 16.7336H61.5596L56.1101 29.6533H59.5229L60.4771 27.1168H65.5046ZM63.0275 20.1825L61.3761 24.6168H64.6422L63.0275 20.1825ZM80.6514 22.6186C80.9327 22.1016 81.0734 21.4659 81.0734 20.7117C81.0734 19.9696 80.9419 19.3461 80.6789 18.8412C80.4159 18.3364 80.055 17.9288 79.5963 17.6186C79.1376 17.3084 78.5994 17.0833 77.9817 16.9434C77.3639 16.8035 76.7003 16.7336 75.9908 16.7336H71.2202V29.6533H74.3578V24.781H75.9174C76.5902 24.781 77.2385 24.708 77.8624 24.562C78.4862 24.4161 79.0367 24.1849 79.5138 23.8686C79.9908 23.5523 80.37 23.1356 80.6514 22.6186ZM77.9358 20.7299C77.9358 20.4258 77.8746 20.1764 77.7523 19.9818C77.63 19.7871 77.4648 19.635 77.2569 19.5255C77.0489 19.4161 76.8135 19.3431 76.5505 19.3066C76.2875 19.2701 76.0153 19.2518 75.7339 19.2518H74.3578V22.2993H75.6789C75.9725 22.2993 76.2538 22.2749 76.5229 22.2263C76.7921 22.1776 77.0336 22.0925 77.2477 21.9708C77.4618 21.8491 77.63 21.688 77.7523 21.4872C77.8746 21.2865 77.9358 21.0341 77.9358 20.7299ZM91.3027 24.2518V29.6533H94.4404V16.7336H91.3027V21.6241H86.2385V16.7336H83.1009V29.6533H86.2385V24.2518H91.3027ZM97.2569 29.6533V16.7336H100.413V29.6533H97.2569ZM112.532 29.4252C113.376 29.042 114.086 28.5219 114.661 27.865L112.477 25.8212C112.196 26.2105 111.823 26.5268 111.358 26.7701C110.893 27.0134 110.349 27.135 109.725 27.135C109.187 27.135 108.691 27.0377 108.239 26.8431C107.786 26.6484 107.398 26.3777 107.073 26.031C106.749 25.6843 106.495 25.2676 106.312 24.781C106.128 24.2944 106.037 23.7591 106.037 23.1752C106.037 22.6034 106.128 22.0773 106.312 21.5967C106.495 21.1162 106.752 20.6995 107.083 20.3467C107.413 19.9939 107.807 19.7172 108.266 19.5164C108.725 19.3157 109.229 19.2153 109.78 19.2153C110.281 19.2153 110.771 19.3127 111.248 19.5073C111.725 19.7019 112.11 20 112.404 20.4015L114.532 18.2847C113.982 17.6642 113.263 17.1928 112.376 16.8704C111.489 16.5481 110.587 16.3869 109.67 16.3869C108.679 16.3869 107.755 16.545 106.899 16.8613C106.043 17.1776 105.297 17.6308 104.661 18.2208C104.024 18.8108 103.526 19.5255 103.165 20.365C102.804 21.2044 102.624 22.1411 102.624 23.1752C102.624 24.1849 102.801 25.1095 103.156 25.9489C103.511 26.7883 104 27.5091 104.624 28.1113C105.248 28.7135 105.985 29.1788 106.835 29.5073C107.685 29.8358 108.612 30 109.615 30C110.716 30 111.688 29.8084 112.532 29.4252ZM123 20.0912C122.731 19.7506 122.379 19.4799 121.945 19.2792C121.511 19.0785 121.092 18.9781 120.688 18.9781C120.48 18.9781 120.269 18.9963 120.055 19.0328C119.841 19.0693 119.648 19.1393 119.477 19.2427C119.306 19.3461 119.162 19.4799 119.046 19.6442C118.93 19.8084 118.872 20.0182 118.872 20.2737C118.872 20.4927 118.917 20.6752 119.009 20.8212C119.101 20.9672 119.235 21.0949 119.413 21.2044C119.59 21.3139 119.801 21.4142 120.046 21.5055C120.291 21.5967 120.566 21.691 120.872 21.7883C121.312 21.9343 121.771 22.0955 122.248 22.2719C122.725 22.4483 123.159 22.6825 123.55 22.9745C123.942 23.2664 124.266 23.6283 124.523 24.0602C124.78 24.4921 124.908 25.0304 124.908 25.6752C124.908 26.4173 124.771 27.059 124.495 27.6004C124.22 28.1417 123.85 28.5888 123.385 28.9416C122.92 29.2944 122.388 29.556 121.789 29.7263C121.19 29.8966 120.572 29.9818 119.936 29.9818C119.006 29.9818 118.107 29.8206 117.239 29.4982C116.37 29.1758 115.648 28.7165 115.073 28.1204L117.128 26.0401C117.446 26.4294 117.865 26.7549 118.385 27.0164C118.905 27.278 119.422 27.4088 119.936 27.4088C120.168 27.4088 120.394 27.3844 120.615 27.3358C120.835 27.2871 121.028 27.208 121.193 27.0985C121.358 26.989 121.489 26.8431 121.587 26.6606C121.685 26.4781 121.734 26.2591 121.734 26.0037C121.734 25.7603 121.673 25.5535 121.55 25.3832C121.428 25.2129 121.254 25.0578 121.028 24.9179C120.801 24.778 120.52 24.6502 120.183 24.5347C119.847 24.4191 119.465 24.2944 119.037 24.1606C118.621 24.0268 118.214 23.8686 117.817 23.6861C117.419 23.5036 117.064 23.2695 116.752 22.9836C116.44 22.6977 116.19 22.351 116 21.9434C115.81 21.5359 115.716 21.0401 115.716 20.4562C115.716 19.7384 115.862 19.1241 116.156 18.6131C116.45 18.1022 116.835 17.6825 117.312 17.354C117.789 17.0255 118.327 16.7853 118.927 16.6332C119.526 16.4811 120.131 16.4051 120.743 16.4051C121.477 16.4051 122.226 16.5389 122.991 16.8066C123.755 17.0742 124.425 17.4696 125 17.9927L123 20.0912Z"
        fill={`${ color && (color.length !== 0) ? color : '#9EABB2' }`}
      />
    </svg>
  );
};

VectorGraphics.defaultProps = {
    color: null,
};

VectorGraphics.propTypes = {
    color: PropTypes.string,
};

export default VectorGraphics;
