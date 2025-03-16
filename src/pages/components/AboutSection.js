import React from 'react';
import { HStack, VStack, ImageTextOverlay, Box } from '../../components/layout';
import { TextTitle, TextBody } from '../../components/text';
import { Color } from '../../styles/color';
import About from '../../images/about.png';
import { useWindowSize } from '../../hooks/useWindowSize';

const CONTENT_MAX_WIDTH = 1250;
const CONTENT_BREAKPOINT = 1350;

const getContentWidth = (width) => {
  if (width < CONTENT_BREAKPOINT) return '95%';
  return `${CONTENT_MAX_WIDTH}px`;
};

export const AboutSection = ({ isSmallScreen }) => {
  const { width } = useWindowSize();
  const contentWidth = getContentWidth(width);

  return isSmallScreen ? (
    <AboutSectionMobile />
  ) : (
    <AboutSectionDesktop contentWidth={contentWidth} />
  );
};

const AboutSectionDesktop = ({ contentWidth }) => {
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
        spacingBottom="100px"
        marginHorizontal="80px"
      >
        <HStack
          justifyContent="center"
          spacingTop="10px"
          spacingBottom="30px"
          gap={35}
        >
          <TextTitle color={Color.WHITE} letterSpacing="10px">
            ABOUT VIMIMADE
          </TextTitle>
        </HStack>
        <Box gap={40} width="100%" alignItems="center">
          <img src={About} width="50%" style={{ objectFit: 'cover' }} />
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

const AboutSectionMobile = () => {
  return (
    <HStack
      id="about-section"
      width="100%"
      justifyContent="center"
      spacingBottom="40px"
    >
      <VStack gap={30} width="100%" spacingTop="40px" spacingBottom="40px">
        <ImageTextOverlay
          imgSrc={About}
          textComponent={
            <VStack
              gap={20}
              color={Color.PRIMARY}
              spacingTop="30px"
              spacingBottom="30px"
              spacingHorizontal="40px"
              marginHorizontal="40px"
            >
              <TextTitle color={Color.WHITE}>about vimimade</TextTitle>
              <TextBody color={Color.WHITE}>
                Hello there, my name is Vimi! I started my ceramics journey in
                June 2024 as an outlet for some heavy emotions I was dealing
                with at the time. Very quickly, I became obsessed with creating
                bowls, plates, etc with my own two hands.
              </TextBody>
              <TextBody color={Color.WHITE}>
                Vimimade is a project I started with the goal of living more
                intentionally. I want to nourish my soul with the joy that
                springs from creativity. Thank you for all your support and I
                look forward to what the future has in store!
              </TextBody>
            </VStack>
          }
          isSmallScreen
        />
      </VStack>
    </HStack>
  );
};
