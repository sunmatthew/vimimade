import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HStack,
  VStack,
  Navbar,
  NavbarItem,
  NavbarLogo,
} from '../components/layout';
import { TextTitle, TextBody } from '../components/text';
import { Color } from '../styles/color';
import { Button } from '../components/button';
import Logo from '../images/logo-no-text.png';
import BG from '../images/commission-banner.JPEG';

const LOGO = <img src={Logo} width="35px" />;

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
      >
        <NavbarLogo
          logo={LOGO}
          logoText="VIMIMADE"
          route="/"
          textColor={Color.BLACK}
        />
        <NavbarItem label="home" route="/" />
        <NavbarItem label="about" route="/" onClick={handleAboutClick} />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="commissions" route="/commissions" />
        <NavbarItem label="contact" route="/" onClick={handleContactClick} />
      </Navbar>

      <VStack>
        <div style={bgStyle}>
          <HStack
            justifyContent="center"
            width="100%"
            height="100%"
            spacingTop={40}
          >
            <TextTitle color={Color.WHITE}>COMMISSIONS</TextTitle>
          </HStack>
        </div>
      </VStack>

      <HStack
        justifyContent="center"
        width="100%"
        spacingTop={20}
        spacingBottom={20}
      >
        <VStack width={800} gap={10}>
          <TextBody color={Color.WHITE}>
            Ceramics commissioned from Vimimade can be for personal use, special
            occassions or as a unique gift. Getting started is super duper easy,
            just click the button below to fill out the commission form.
          </TextBody>
          <Button
            content="View form"
            onClick={handleSubmitCommission}
            color={Color.BEIGHT_DARK}
            textColor={Color.WHITE}
          />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Commissions;
