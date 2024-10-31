import React from 'react';
import { HStack, Navbar, NavbarItem } from '../../components/layout';
import { Color } from '../../styles/color';

const Home = () => {
  return (
    <HStack>
      <Navbar color={Color.PRIMARY} align="right" gap={2} vSpacing={2}>
        <NavbarItem label="home" route="/" />
        <NavbarItem label="my work" route="/work" />
        <NavbarItem label="contact" route="/contact" />
      </Navbar>
    </HStack>
  );
};

export default Home;
