import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Box } from '../../components/layout';
import { TextTitle, TextBody } from '../../components/text';
import { Button } from '../../components/button';
import { Color } from '../../styles/color';
import BG from '../../images/bg-white.JPEG';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Size } from '../../components/text/shared';

const CONTENT_MAX_WIDTH = 1300;
const CONTENT_BREAKPOINT = 1350;

const TITLE_BREAK_WIDTH = 1318;

const getContentWidth = (width) => {
  if (width < CONTENT_BREAKPOINT) return '90%';
  return `${CONTENT_MAX_WIDTH}px`;
};

const SPLASH_CONTENT = {
  DEFAULT: {
    title: 'VIMIMADE CERAMICS',
    text: 'Welcome to Vimimade, a site dedicated to my passion for pottery and all things ceramic. This is a creative space where I showcase my handmade creations, all meticulously designed and crafted by me (Vimi). Each piece is one-of-a-kind and made with care and attention to detail, inspired by the beauty of everyday life and the balance between form and function. Feel free to browse, explore, and enjoy your time here!',
  },
  SMALL_SCREEN: {
    title: 'hello!',
    text: 'Welcome to Vimimade, a site dedicated to my passion for pottery. Feel free to browse my handmade cermamic collection and enjoy your time here. :)',
  },
};

const bgStyle = {
  width: '100%',
  justifyContent: 'center',
  height: '1000px',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  paddingTop: '60px',
};

export const HomeSplashSection = ({ isSmallScreen }) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const contentWidth = getContentWidth(width);

  const isTitleBroken = useMemo(() => width <= TITLE_BREAK_WIDTH, [width]);

  const handleViewPortfolio = useCallback(() => {
    navigate('/portfolio');
  }, [navigate]);

  const handleCommissionRequest = useCallback(() => {
    navigate('/commissions');
  }, [navigate]);

  return (
    <VStack>
      <div style={bgStyle}>
        <HStack justifyContent="center" height="100%">
          <HStack
            justifyContent={isTitleBroken ? 'left' : 'center'}
            width={contentWidth}
            height="100%"
            style={{ padding: isSmallScreen ? '0 20px' : 0 }}
          >
            <VStack
              height="100%"
              justifyContent="center"
              alignItems={isTitleBroken ? 'left' : 'center'}
              gap={30}
            >
              <VStack alignItems={isTitleBroken ? 'left' : 'center'} gap={10}>
                <TextTitle
                  color={Color.WHITE}
                  letterSpacing="10px"
                  sizeOverride={Size.TITLE_BIG}
                  fontWeightOverride="600"
                  lineHeightOverride="1.4"
                >
                  {isSmallScreen
                    ? SPLASH_CONTENT.SMALL_SCREEN.title
                    : SPLASH_CONTENT.DEFAULT.title}
                </TextTitle>
                <TextBody
                  color={Color.WHITE}
                  textAlign={isTitleBroken ? 'left' : 'center'}
                >
                  {isSmallScreen
                    ? SPLASH_CONTENT.SMALL_SCREEN.text
                    : SPLASH_CONTENT.DEFAULT.text}
                </TextBody>
              </VStack>

              <Box
                gap={20}
                smallScreenGap={10}
                isSmallScreen={isSmallScreen}
                justifyContent={isTitleBroken ? 'left' : 'center'}
              >
                <Button
                  content="View Portfolio"
                  onClick={handleViewPortfolio}
                  color={Color.SECONDARY_2}
                  textColor={Color.WHITE}
                />
                <Button
                  content="Commission Requests"
                  onClick={handleCommissionRequest}
                  color={Color.SECONDARY_2}
                  textColor={Color.WHITE}
                />
              </Box>
            </VStack>
          </HStack>
        </HStack>
      </div>
    </VStack>
  );
};
