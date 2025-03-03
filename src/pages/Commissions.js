import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack, Navbar, NavbarItem } from '../components/layout';
import { TextBody } from '../components/text';
import { Color } from '../styles/color';
import { Button } from '../components/button';
import Logo from '../images/logo-no-text.png';
import BG from '../images/commission-banner.JPEG';
import { useWindowSize } from '../hooks/useWindowSize';

const CONTENT_MAX_WIDTH = 1300;
const CONTENT_BREAKPOINT = 1350;

const getContentWidth = (width) => {
  if (width < CONTENT_BREAKPOINT) return '95%';
  return `${CONTENT_MAX_WIDTH}px`;
};

const LOGO = <img src={Logo} alt="Vimimade Logo" width="35px" />;

const bgStyle = {
  width: '100%',
  justifyContent: 'center',
  height: '250px',
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const Commissions = () => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const contentWidth = getContentWidth(width);
  const isSmallScreen = width < CONTENT_BREAKPOINT;

  const handleSubmitCommission = useCallback(() => {}, []);

  const handleAboutClick = useCallback(() => {
    navigate('/', {
      state: { shouldScrollToAbout: true, from: 'commissions' },
    });
  }, [navigate]);

  const handleContactClick = useCallback(() => {
    console.log('Commissions: Navigating to home with contact scroll state');
    navigate('/', {
      state: { shouldScrollToContact: true, from: 'commissions' },
    });
  }, [navigate]);

  return (
    <VStack color={Color.PRIMARY} isPageContainer>
      <Navbar
        color={Color.BEIGHT_DARK}
        align="center"
        gap={2}
        textColor={Color.PRIMARY}
        vSpacing={10}
        isFixed
        logo={LOGO}
        logoText="VIMIMADE"
        logoRoute="/"
      >
        <NavbarItem label="about" route="/" onClick={handleAboutClick} />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="commissions" route="/commissions" />
        <NavbarItem label="contact" route="/" onClick={handleContactClick} />
      </Navbar>

      <VStack>
        <div style={bgStyle}></div>
      </VStack>

      <HStack
        justifyContent="center"
        width="100%"
        spacingTop={20}
        spacingBottom={20}
      >
        <VStack
          width={contentWidth}
          gap={30}
          style={{ padding: isSmallScreen ? '0 20px' : 0 }}
        >
          <TextBody color={Color.WHITE}>
            tmp text until VIMI finishes this design, some ideas for this page
            are (1) FAQ accordion, (2) link to google form for commission
            request, (3) commission portfolio
          </TextBody>
          <Button
            content="View form"
            onClick={handleSubmitCommission}
            color={Color.BEIGHT_DARK}
            textColor={Color.WHITE}
            size="small"
          />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Commissions;
