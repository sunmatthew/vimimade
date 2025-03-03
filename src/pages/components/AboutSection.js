import React from 'react';
import { HStack, VStack, Box } from '../../components/layout';
import { TextTitle, TextBody } from '../../components/text';
import { Color } from '../../styles/color';
import About from '../../images/about.png';
import { useWindowSize } from '../../hooks/useWindowSize';

const CONTENT_MAX_WIDTH = 1300;
const CONTENT_BREAKPOINT = 1350;

const getContentWidth = (width) => {
  if (width < CONTENT_BREAKPOINT) return '95%';
  return `${CONTENT_MAX_WIDTH}px`;
};

export const AboutSection = ({ isSmallScreen }) => {
  const { width } = useWindowSize();
  const contentWidth = getContentWidth(width);

  return (
    <HStack
      id="about-section"
      width="100%"
      color={Color.PRIMARY}
      justifyContent="center"
      spacingBottom="40px"
    >
      <VStack
        gap={30}
        width={contentWidth}
        spacingTop="80px"
        spacingBottom="80px"
      >
        <HStack justifyContent="center" spacingTop="10px" spacingBottom="10px">
          <TextTitle color={Color.WHITE}>ABOUT VIMIMADE</TextTitle>
        </HStack>
        <Box
          gap={40}
          smallScreenGap={20}
          width="100%"
          isSmallScreen={isSmallScreen}
          alignItems="center"
        >
          <img
            src={About}
            width={isSmallScreen ? '100%' : '50%'}
            style={{ objectFit: 'cover' }}
          />
          <VStack gap={20}>
            <TextBody color={Color.WHITE} textAlign="center">
              Hello there, my name is Vimi! I started my ceramics journey in
              June 2024 as an outlet for some heavy emotions I was dealing with
              at the time. Very quickly, I became obsessed with creating bowls,
              plates, etc with my own two hands.
            </TextBody>
            <TextBody color={Color.WHITE} textAlign="center">
              Vimimade is a project I started with the goal of living more
              intentionally. I want to nourish my soul with the joy that springs
              from creativity. My artist stamp and logo, which I engrave by hand
              on each individual item I create, is a drawing of my dog Tofu's
              face. In that way, I keep him close to my heart and eternal.
            </TextBody>
            <TextBody color={Color.WHITE} textAlign="center">
              Through Vimimade, I hope to share a piece of both myself and Tofu
              with the world. Thank you for all your support and I look forward
              to what the future has in store!
            </TextBody>
          </VStack>
        </Box>
      </VStack>
    </HStack>
  );
};
