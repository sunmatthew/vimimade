import React from 'react';
import { Gallery } from "react-grid-gallery";
import { VStack, Navbar, NavbarItem } from '../components/layout';
import { TextTitle } from '../components/text';
import { Color } from '../styles/color';
import Logo from '../images/logo-no-text.png'

const CONTENT_WIDTH = "1400px"
const LOGO = <img src={Logo} width="35px" />;

const PHOTOS = [
  {
    src: "../portfolio/1024 768 (2).jpg",
    width: 1024,
    height: 768,
  },
  {
    alt: '1024 768',
    src: "../portfolio/1024 768.jpg",
    width: 1024,
    height: 768,
  },
  {
    alt: '1074 681',
    src: "../portfolio/1074 681.jpg",
    width: 1074,
    height: 681,
  },
  {
    alt: '1075 1011',
    src: "../portfolio/1075 1011.jpg",
    width: 1075,
    height: 1011,
  },
  {
    alt: '1075 888',
    src: "../portfolio/1075 888.jpg",
    width: 1075,
    height: 888,
  },
  {
    alt: '1093 1033',
    src: "../portfolio/1093 1033.jpg",
    width: 1093,
    height: 1033,
  },
  {
    alt: '1282 796',
    src: "../portfolio/1282 796.JPEG",
    width: 1282,
    height: 796,
  },
  {
    alt: '664 503',
    src: "../portfolio/664 503.jpg",
    width: 664,
    height: 503,
  },
  {
    alt: '768 1024',
    src: "../portfolio/768 1024.jpg",
    width: 768,
    height: 1024,
  },
  {
    alt: '768 740',
    src: "../portfolio/768 740.jpg",
    width: 768,
    height: 740,
  },
  {
    alt: '768 801',
    src: "../portfolio/768 801.jpg",
    width: 768,
    height: 801,
  },
  {
    alt: '768 823',
    src: "../portfolio/768 823.jpg",
    width: 768,
    height: 823,
  },
  {
    alt: '768 832',
    src: "../portfolio/768 832.jpg",
    width: 768,
    height: 832,
  },
  {
    alt: '845 770',
    src: "../portfolio/845 770.jpg",
    width: 845,
    height: 770,
  },
  {
    alt: '890 1048',
    src: "../portfolio/890 1048.jpg",
    width: 890,
    height: 1048,
  },
  {
    alt: '890 795',
    src: "../portfolio/890 795.jpg",
    width: 890,
    height: 795,
  },
  {
    alt: '922 1040',
    src: "../portfolio/922 1040.jpg",
    width: 922,
    height: 1040,
  },
  {
    alt: '922 1075',
    src: "../portfolio/922 1075.jpg",
    width: 922,
    height: 1075,
  },
  {
    alt: '922 741',
    src: "../portfolio/922 741.jpg",
    width: 922,
    height: 741,
  },
  {
    alt: '922 789',
    src: "../portfolio/922 789.jpg",
    width: 922,
    height: 789,
  },
  {
    alt: '922 863',
    src: "../portfolio/922 863.jpg",
    width: 922,
    height: 863,
  },
  {
    alt: '922 888',
    src: "../portfolio/922 888.jpg",
    width: 922,
    height: 888,
  },
  {
    alt: '935 610',
    src: "../portfolio/935 610.jpg",
    width: 935,
    height: 610,
  },
  {
    alt: '972 859',
    src: "../portfolio/972 859.jpg",
    width: 972,
    height: 859,
  },
  {
    alt: '998 1331',
    src: "../portfolio/998 1331.jpg",
    width: 998,
    height: 1331,
  },
];

const Portfolio = () => {
  return (
    <VStack color={Color.PRIMARY} isPageContainer>
      <VStack width="100%" alignItems='center'>
        <VStack gap={30} width={CONTENT_WIDTH} spacingTop="60px" spacingBottom="160px">
          <TextTitle color={Color.WHITE} textAlign='center'>PORTFOLIO</TextTitle>
          <VStack color={Color.PRIMARY}>
            <Gallery 
              images={PHOTOS} 
              rowHeight={400}
              margin={4}
              enableImageSelection={false} 
            />
          </VStack>
        </VStack>

        <Navbar color={Color.BEIGHT_DARK} align="center" gap={2} textColor={Color.PRIMARY} vSpacing={10} isBottom isFixed>
          <NavbarItem icon={LOGO} route="/" />
          <NavbarItem label="about" route="/#about-section" />
          <NavbarItem label="portfolio" route="/portfolio" />
          <NavbarItem label="contact" route="/contact" />
          <NavbarItem label="commissions" route="/commissions" />
        </Navbar>
      </VStack>
    </VStack>
  );
};

export default Portfolio;
