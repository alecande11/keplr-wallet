import React, {FunctionComponent} from 'react';
import {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
} from 'react-native-svg';
import {IconProps} from './types';

export const LedgerIcon: FunctionComponent<IconProps> = ({size}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <G id="Frame 3521">
        <G id="Group 3187">
          <G id="Ledger">
            <Path
              id="Rectangle 3836"
              d="M8.74414 39.2412L8.74414 26.123C8.74414 24.3833 10.1544 22.973 11.8941 22.973L48.9762 22.973C50.7159 22.973 52.1262 24.3833 52.1262 26.123L52.1262 36.0912C52.1262 37.8309 50.7159 39.2412 48.9762 39.2412L8.74414 39.2412Z"
              fill="#202330"
            />
            <Rect
              id="Rectangle 3837"
              x="8.25"
              y="35.7891"
              width="14.7893"
              height="43.875"
              rx="4.5"
              transform="rotate(-90 8.25 35.7891)"
              fill="url(#paint0_linear_1152_15280)"
            />
            <Rect
              id="Rectangle 3840"
              x="21.8145"
              y="32.4521"
              width="8.39419"
              height="16.7884"
              rx="2.25"
              transform="rotate(-90 21.8145 32.4521)"
              fill="black"
            />
            <Path
              id="Union"
              d="M8.25 22.8095C8.25 21.8103 9.06004 21.0003 10.0593 21.0003L44.7303 21.0003C48.8143 21.0003 52.125 24.311 52.125 28.3949C52.125 32.4789 48.8143 35.7896 44.7303 35.7896L10.4684 35.7896C9.51547 35.7896 8.74298 36.5621 8.74298 37.515C8.74298 38.4679 9.51548 39.2404 10.4684 39.2404L48.1812 39.2404C48.1812 39.5127 47.9605 39.7334 47.6882 39.7334L10.2219 39.7334C9.13285 39.7334 8.25 38.8505 8.25 37.7615L8.25 22.8095Z"
              fill="url(#paint1_linear_1152_15280)"
            />
            <G id="Mask group">
              <G id="Group 3186">
                <Circle
                  id="Ellipse 141"
                  cx="44.9755"
                  cy="28.6417"
                  r="4.19031"
                  transform="rotate(-90 44.9755 28.6417)"
                  fill="#92AEC3"
                />
                <Circle
                  id="Ellipse 140"
                  cx="44.9747"
                  cy="28.6415"
                  r="3.69733"
                  transform="rotate(-90 44.9747 28.6415)"
                  fill="url(#paint2_linear_1152_15280)"
                />
              </G>
            </G>
            <G id="Group 3181">
              <Path
                id="Vector"
                d="M34.5439 31.8119V32.3395H38.3212V29.96H37.7708V31.8119H34.5439ZM34.5439 23.959V24.4866H37.7708V26.3386H38.3212V23.959H34.5439ZM32.596 28.0407V26.8147H33.4593C33.8803 26.8147 34.0314 26.9491 34.0314 27.3165V27.5337C34.0314 27.9113 33.8856 28.0407 33.4593 28.0407H32.596ZM33.9665 28.2579C34.3604 28.1596 34.6355 27.8078 34.6355 27.3889C34.6355 27.1251 34.5277 26.887 34.3227 26.6956C34.0636 26.4576 33.7182 26.3386 33.2704 26.3386H32.0563V29.9598H32.596V28.5166H33.4054C33.8208 28.5166 33.9882 28.6821 33.9882 29.096V29.96H34.5386V29.1788C34.5386 28.6097 34.3983 28.3925 33.9665 28.3304V28.2579ZM29.4231 28.3769H31.0851V27.901H29.4231V26.8145H31.247V26.3386H28.8726V29.9598H31.3279V29.4839H29.4231V28.3769ZM27.6153 28.5683V28.8166C27.6153 29.3391 27.4156 29.5098 26.9138 29.5098H26.7951C26.2932 29.5098 26.0504 29.3546 26.0504 28.6355V27.6629C26.0504 26.9387 26.3041 26.7886 26.8059 26.7886H26.9137C27.4048 26.7886 27.5613 26.9645 27.5666 27.4508H28.1602C28.1063 26.7369 27.6098 26.2869 26.8651 26.2869C26.5037 26.2869 26.2015 26.3956 25.9748 26.6024C25.6349 26.9077 25.446 27.425 25.446 28.1492C25.446 28.8476 25.608 29.365 25.9425 29.6856C26.1691 29.8977 26.4821 30.0115 26.7897 30.0115C27.1134 30.0115 27.4103 29.8873 27.5613 29.6184H27.6367V29.9598H28.1332V28.0924H26.6708V28.5683H27.6153ZM22.8561 26.8145H23.4443C24.0001 26.8145 24.3024 26.949 24.3024 27.6733V28.6251C24.3024 29.3493 24.0001 29.4839 23.4443 29.4839H22.8561V26.8145ZM23.4928 29.96C24.5235 29.96 24.9065 29.2098 24.9065 28.1494C24.9065 27.0733 24.4965 26.3388 23.4819 26.3388H22.3163V29.96H23.4928ZM19.7102 28.3769H21.3722V27.901H19.7102V26.8145H21.534V26.3386H19.1596V29.9598H21.615V29.4839H19.7102V28.3769ZM16.5265 26.3386H15.9761V29.9598H18.4583V29.4839H16.5265V26.3386ZM12.1934 29.96V32.3396H15.9706V31.8119H12.7437V29.96H12.1934ZM12.1934 23.959V26.3386H12.7437V24.4866H15.9706V23.959H12.1934Z"
                fill="#92AEC3"
              />
            </G>
          </G>
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1152_15280"
          x1="15.6447"
          y1="35.7891"
          x2="15.6447"
          y2="79.6641"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#414866" />
          <Stop offset="1" stopColor="#2F3652" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1152_15280"
          x1="8.25"
          y1="33.3038"
          x2="42.1233"
          y2="12.8615"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#D3E4F0" />
          <Stop offset="1" stopColor="#B6CBDB" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1152_15280"
          x1="44.9747"
          y1="24.9442"
          x2="44.9747"
          y2="32.3389"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DCEEFD" />
          <Stop offset="1" stopColor="#BACEDE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
