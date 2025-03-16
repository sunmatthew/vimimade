import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { VStack, Navbar, NavbarItem } from '../components/layout';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { HomeSplashSection } from './components/HomeSplashSection';
import { useWindowSize } from '../hooks/useWindowSize';

import { Color } from '../styles/color';
import { isMobileWidth, isTabletWidth } from '../constants/breakpoints';
import Logo from '../images/logo-no-text.png';

const LOGO = <img src={Logo} alt="Vimimade Logo" width="35px" />;

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { width } = useWindowSize();

  const { isMobileView, isTabletView } = useMemo(() => {
    const isMobileView = isMobileWidth(width);
    const isTabletView = isTabletWidth(width);
    return { isMobileView, isTabletView };
  }, [width]);

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

  return (
    <VStack isPageContainer>
      <Navbar
        color={Color.SECONDARY}
        gap={2}
        textColor={Color.PRIMARY}
        vSpacing={7}
        isFixed
        logo={LOGO}
        // logoText="VIMIMADE"
        logoRoute="/"
      >
        <NavbarItem label="about" route="#about-section" />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="commissions" route="/commissions" />
        <NavbarItem label="contact" route="#contact-section" />
      </Navbar>

      <HomeSplashSection isSmallScreen={isMobileView} />
      <AboutSection isSmallScreen={isTabletView || isMobileView} />
      <ContactSection isSmallScreen={isMobileView} />
    </VStack>
  );
};

export default Home;
