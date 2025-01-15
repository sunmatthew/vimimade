import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Navbar, NavbarItem } from '../components/layout';
import { TextTitle, TextBody } from '../components/text';
import { Button } from '../components/button'

import { Color } from '../styles/color';
import Logo from '../images/logo-no-text.png'
import BG from '../images/bg-blue-bowl.png'
import About from '../images/about.png'
import Tofu from '../images/tofu.png'

const bgStyle = {
  width: '100%',
  justifyContent: 'center',
  height: '1000px',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const CONTENT_WIDTH = "1200px"
const LOGO = <img src={Logo} width="35px" />;

const Home = () => {
  const navigate = useNavigate();

  const handleViewPortfolio = useCallback(() => {
    navigate('/portfolio')
  }, [navigate]);

  return (
    <VStack isPageContainer>
      <Navbar color={Color.SECONDARY} align="center" gap={2} textColor={Color.PRIMARY} vSpacing={10} isFixed>
        <NavbarItem icon={LOGO} route="/" />
        <NavbarItem label="about" route="#about-section" />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="contact" route="/contact" />
        <NavbarItem label="commissions" route="/commissions" />
      </Navbar>

      <VStack>
        <div style={bgStyle}>
          <HStack justifyContent='center' height="100%" >
            <HStack justifyContent='center' width="900px" height="100%" >
              <VStack height="100%" justifyContent='center' alignItems='center' gap={20}>
                <VStack alignItems='center'>
                  <TextTitle color={Color.WHITE}>POTTERY BY VIMIMADE</TextTitle>
                  <TextBody color={Color.WHITE} textAlign='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</TextBody>
                </VStack>
                <Button content="View Portfolio" onClick={handleViewPortfolio} color={Color.SECONDARY_2} textColor={Color.WHITE} />
              </VStack>
            </HStack>
          </HStack>
        </div>
      </VStack>

      <HStack id="about-section" width="100%" color={Color.SECONDARY_2} justifyContent='center' spacingBottom="40px">
        <VStack gap={30} width={CONTENT_WIDTH}>
          <HStack justifyContent='center' spacingTop="40px">
            <TextTitle color={Color.WHITE}>ABOUT VIMIMADE</TextTitle>
          </HStack>
          <HStack gap={40} width='100%'>
            <img src={About} width="50%" />
            <VStack gap={20}>
              <TextBody color={Color.WHITE}>
                Hello there, my name is Vimi! I started my ceramics journey in June 2024 as an outlet for some heavy emotions I was dealing with at the time. Very quickly, I became obsessed with creating bowls, plates, etc with my own two hands. 
              </TextBody>
              <TextBody color={Color.WHITE}>
                Vimimade is a project I started with the goal of living more intentionally. I want to nourish my soul with the joy that springs from creativity. My artist stamp and logo, which I engrave by hand on each individual item I create, is a drawing of my dog Tofu’s face. In that way, I keep him close to my heart and eternal.
              </TextBody>
              <TextBody color={Color.WHITE}>
              Through Vimimade, I hope to share a piece of both myself and Tofu with the world. Thank you for all your support and I look forward to what the future has in store!
              </TextBody>
            </VStack>
          </HStack>
        </VStack>
      </HStack>

      <HStack width="100%" color={Color.PRIMARY} justifyContent='center' spacingBottom="40px">
        <VStack width="1200px">
          <HStack justifyContent='center' spacingTop="40px">
            <TextTitle color={Color.WHITE}>CONTACT</TextTitle>
          </HStack>
          <HStack gap={40}>
            <img src={Tofu} />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Home;
