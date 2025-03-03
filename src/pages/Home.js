import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import {
  HStack,
  VStack,
  Navbar,
  NavbarItem,
  NavbarLogo,
  Box,
} from '../components/layout';
import { TextTitle, TextBody } from '../components/text';
import { Button, FloatingButton } from '../components/button';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { useWindowSize } from '../hooks/useWindowSize';

import { Color } from '../styles/color';
import { isMobileWidth } from '../constants/breakpoints';
import Logo from '../images/logo-no-text.png';
import BG from '../images/bg-white.JPEG';
// import Tofu from '../images/tofu.png'
import IG from '../images/ig-logo.png';

const bgStyle = {
  width: '100%',
  justifyContent: 'center',
  height: '1000px',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  paddingTop: '60px',
};

const LOGO = <img src={Logo} width="35px" />;

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { width } = useWindowSize();
  const isSmallScreen = isMobileWidth(width);

  useEffect(() => {
    if (location.state?.shouldScrollToAbout && !hasScrolled) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById('about-section');

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setHasScrolled(true);
          navigate('/', { replace: true, state: {} });
        }
      }, 200);

      return () => clearTimeout(timeoutId);
    }

    if (location.state?.shouldScrollToContact && !hasScrolled) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById('contact-section');

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setHasScrolled(true);
          navigate('/', { replace: true, state: {} });
        }
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [location.state, hasScrolled, navigate]);

  useEffect(() => {
    return () => setHasScrolled(false);
  }, []);

  const handleViewPortfolio = useCallback(() => {
    navigate('/portfolio');
  }, [navigate]);

  const handleIGClick = useCallback(() => {
    window.open('https://www.instagram.com/vimimade/', '_blank');
  }, []);

  return (
    <VStack isPageContainer>
      <Navbar
        color={Color.SECONDARY}
        gap={2}
        textColor={Color.PRIMARY}
        vSpacing={10}
        isFixed
      >
        <NavbarLogo logo={LOGO} logoText="VIMIMADE" route="/" />
        <NavbarItem label="about" route="#about-section" />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="commissions" route="/commissions" />
        <NavbarItem label="contact" route="#contact-section" />
      </Navbar>

      <VStack>
        <div style={bgStyle}>
          <HStack justifyContent="center" height="100%">
            <HStack justifyContent="center" width="900px" height="100%">
              <VStack
                height="100%"
                justifyContent="center"
                alignItems="center"
                gap={20}
              >
                <VStack alignItems="center">
                  <TextTitle color={Color.WHITE}>VIMIMADE CERAMICS</TextTitle>
                  <TextBody color={Color.WHITE} textAlign="center">
                    Welcome to Vimimade, a site dedicated to my passion for
                    pottery and all things ceramic. This is a creative space
                    where I showcase my handmade creations, all meticulously
                    designed and crafted by me (Vimi). Each piece is
                    one-of-a-kind and made with care and attention to detail,
                    inspired by the beauty of everyday life and the balance
                    between form and function. Feel free to browse, explore, and
                    enjoy your time here!
                  </TextBody>
                </VStack>

                <Box
                  gap={20}
                  smallScreenGap={10}
                  isSmallScreen={isSmallScreen}
                  justifyContent="center"
                >
                  <Button
                    content="View Portfolio"
                    onClick={handleViewPortfolio}
                    color={Color.SECONDARY_2}
                    textColor={Color.WHITE}
                  />
                  <Button
                    content="Commission Requests"
                    onClick={handleViewPortfolio}
                    color={Color.SECONDARY_2}
                    textColor={Color.WHITE}
                  />
                </Box>
              </VStack>
            </HStack>
          </HStack>
        </div>
      </VStack>

      <AboutSection isSmallScreen={isSmallScreen} />
      <ContactSection isSmallScreen={isSmallScreen} />

      <FloatingButton
        icon={IG}
        align="right"
        onClick={handleIGClick}
        isBottom
      />
    </VStack>
  );
};

export default Home;
