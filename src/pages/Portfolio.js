import React from 'react';
import { ColumnsPhotoAlbum  } from "react-photo-album";
import { VStack, Navbar, NavbarItem } from '../components/layout';
import { TextTitle } from '../components/text';
import { Color } from '../styles/color';
import Logo from '../images/logo-no-text.png'

const CONTENT_WIDTH = "1200px"
const LOGO = <img src={Logo} width="35px" />;

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const PHOTOS = [
  {
    alt: 'blue bowl with mooncake',
    src: "../portfolio/bowl-mooncake.JPG",
    width: 614,
    height: 819,
  },
  {
    alt: 'brown bowl against bricks',
    src: "../portfolio/brown-bowl-bricks.JPG",
    width: 614,
    height: 819,
  },
  {
    alt: 'bubble bowl with cookie',
    src: "../portfolio/bubble-bowl.JPG",
    width: 819,
    height: 614,
  },
  {
    alt: 'tricolor bowl',
    src: "../portfolio/cool-tricolor-bowl.JPG",
    width: 614,
    height: 819,
  },
  {
    alt: 'galaxy bowl',
    src: "../portfolio/galaxy-bowl.JPG",
    width: 614,
    height: 819,
  },
  {
    alt: 'maple',
    src: "../portfolio/maple.JPG",
    width: 432,
    height: 768,
  },
  {
    alt: 'bowl against bricks',
    src: "../portfolio/glaze-pattern-bricks.JPG",
    width: 614,
    height: 819,
  },
].map(
  ({ src, alt, width, height }) =>
    ({
      src,
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }),
);

const Portfolio = () => {
  return (
    <VStack alignItems='center' color={Color.PRIMARY} isPageContainer>
      <VStack width={CONTENT_WIDTH} alignItems='center' spacingTop="60px" gap={30}>
        <TextTitle color={Color.WHITE} textAlign='center'>PORTFOLIO</TextTitle>
        <ColumnsPhotoAlbum photos={PHOTOS} />
      </VStack>
      <Navbar color={Color.BEIGHT_DARK} align="center" gap={2} textColor={Color.PRIMARY} vSpacing={10} isBottom isFixed>
        <NavbarItem icon={LOGO} route="/" />
        <NavbarItem label="about" route="/#about-section" />
        <NavbarItem label="portfolio" route="/portfolio" />
        <NavbarItem label="contact" route="/contact" />
        <NavbarItem label="commissions" route="/commissions" />
      </Navbar>
    </VStack>
  );
};

export default Portfolio;
