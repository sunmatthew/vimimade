import React, { useCallback } from 'react';
import { HStack, VStack, Navbar, NavbarItem } from '../components/layout';
import { TextTitle, TextBody } from '../components/text';
import { Color } from '../styles/color';
import { Button } from '../components/button'
import Logo from '../images/logo-no-text.png'
import BG from '../images/commission-banner.JPEG'

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
    const handleSubmitCommission = useCallback(() => {
    }, []);
  

  return (
    <VStack color={Color.PRIMARY} isPageContainer>
      <Navbar color={Color.BEIGHT_DARK} align="center" gap={2} textColor={Color.PRIMARY} vSpacing={10} isFixed>
        <NavbarItem icon={LOGO} route="/" />
        <NavbarItem label="about" route="/#about-section" />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="contact" route="/contact" />
        <NavbarItem label="commissions" route="/commissions" />
      </Navbar>

      <VStack>
        <div style={bgStyle}>
          <HStack justifyContent='center' width="100%" height="100%" spacingTop={40}>
            <TextTitle color={Color.WHITE}>COMMISSIONS</TextTitle>
          </HStack>
        </div>
      </VStack>

      <HStack justifyContent='center' width="100%" spacingTop={20} spacingBottom={20}>
        <VStack width={800} gap={10}>
          <TextBody color={Color.WHITE}>Ceramics commissioned from Vimimade can be for personal use, special occassions or as a unique gift. Getting started is super duper easy, just click the button below to fill out the commission form.</TextBody>
          <Button content="View form" onClick={handleSubmitCommission} color={Color.BEIGHT_DARK} textColor={Color.WHITE} />
        </VStack>
      </HStack>
      
    </VStack>
  );
};

export default Commissions;
