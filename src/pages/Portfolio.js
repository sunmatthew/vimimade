import React, { useCallback, useMemo, useState } from 'react';
import { Gallery } from "react-grid-gallery";
import { HStack, VStack, Navbar, NavbarItem } from '../components/layout';
import { TextTitle } from '../components/text';
import { FilterButton } from '../components/button'
import { Color } from '../styles/color';
import Logo from '../images/logo-no-text.png'

const CONTENT_WIDTH = "1400px"
const LOGO = <img src={Logo} width="35px" />;

const PHOTOS = [
  {
    key: "bowls,decorative,plates",
    alt: '1024 768',
    src: "../portfolio/1024 768.jpg",
    width: 1024,
    height: 768,
  },
  {
    key: "bowls,food",
    alt: '1074 681',
    src: "../portfolio/1074 681.jpg",
    width: 1074,
    height: 681,
  },
  {
    key: "bowls",
    alt: '1075 1011',
    src: "../portfolio/1075 1011.jpg",
    width: 1075,
    height: 1011,
  },
  {
    key: "bowls,food",
    alt: '1075 888',
    src: "../portfolio/1075 888.jpg",
    width: 1075,
    height: 888,
  },
  {
    key: "bowls",
    alt: '1093 1033',
    src: "../portfolio/1093 1033.jpg",
    width: 1093,
    height: 1033,
  },
  {
    key: "bowls",
    alt: '1282 796',
    src: "../portfolio/1282 796.JPEG",
    width: 1282,
    height: 796,
  },
  {
    key: "bowls",
    alt: '664 503',
    src: "../portfolio/664 503.jpg",
    width: 664,
    height: 503,
  },
  {
    key: "bowls,decorative",
    alt: '768 1024',
    src: "../portfolio/768 1024.jpg",
    width: 768,
    height: 1024,
  },
  {
    key: "bowls,plates,set",
    alt: '972 859',
    src: "../portfolio/972 859.jpg",
    width: 972,
    height: 859,
  },
  {
    key: "bowls",
    alt: '768 740',
    src: "../portfolio/768 740.jpg",
    width: 768,
    height: 740,
  },
  {
    key: "bowls",
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
    key: "bowls",
    alt: '768 832',
    src: "../portfolio/768 832.jpg",
    width: 768,
    height: 832,
  },
  {
    key: "bowls",
    alt: '845 770',
    src: "../portfolio/845 770.jpg",
    width: 845,
    height: 770,
  },
  {
    key: "bowls",
    alt: '890 1048',
    src: "../portfolio/890 1048.jpg",
    width: 890,
    height: 1048,
  },
  {
    key: "bowls",
    alt: '890 795',
    src: "../portfolio/890 795.jpg",
    width: 890,
    height: 795,
  },
  {
    key: "bowls,plates",
    alt: '922 1040',
    src: "../portfolio/922 1040.jpg",
    width: 922,
    height: 1040,
  },
  {
    key: "bowls",
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
    key: "bowls,plates",
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
    key: "bowls",
    alt: '922 888',
    src: "../portfolio/922 888.jpg",
    width: 922,
    height: 888,
  },
  {
    key: "bowls,plates,set",
    alt: '935 610',
    src: "../portfolio/935 610.jpg",
    width: 935,
    height: 610,
  },
  {
    key: "bowls,decorative",
    alt: '998 1331',
    src: "../portfolio/998 1331.jpg",
    width: 998,
    height: 1331,
  },
  {
    key: "bowls,food",
    src: "../portfolio/1024 768 (2).jpg",
    width: 1024,
    height: 768,
  },
];

const Portfolio = () => {
  const [selectedFilters, setSelectedFilters] = useState(["all"]);

  const handleFilterSelect = useCallback((filter) => {
    if (selectedFilters.includes(filter)) {
      // if the last filter is deselected, auto-select the ALL filter
      if (selectedFilters.length == 1) {
        setSelectedFilters(["all"])
      } else {
        setSelectedFilters(selectedFilters.filter(f => f != filter));
      }
    } else {
      // always deselect ALL if its the only one selected
      if (selectedFilters.length === 1 && selectedFilters[0] === "all") {
        setSelectedFilters([filter]);
      } else {
        setSelectedFilters([...selectedFilters, filter]);
      }
    }
  }, [selectedFilters]);

  const filteredPhotos = useMemo(() => {
    if (selectedFilters.includes("all")) {
      return PHOTOS;
    }

    return PHOTOS.filter((photo) => {
      if (photo.key) {
        const tags = photo.key.split(",");
        return selectedFilters.every(f => tags.includes(f));
      } else {
        return false
      }
    });
  }, [selectedFilters]);

  const renderGallery = useMemo(() => {
    return (
      <Gallery 
        key={filteredPhotos.length}
        images={filteredPhotos} 
        rowHeight={400}
        margin={4}
        enableImageSelection={false} 
      />
    );
  }, [filteredPhotos]);

  return (
    <VStack color={Color.PRIMARY} isPageContainer>
      <VStack width="100%" alignItems='center'>
        <VStack gap={30} width={CONTENT_WIDTH} spacingTop="60px" spacingBottom="160px">
          <TextTitle color={Color.WHITE} textAlign='center'>PORTFOLIO</TextTitle>
          <VStack color={Color.PRIMARY} gap={10}>
            <HStack gap={10}>
              <FilterButton content="All" onClick={() => handleFilterSelect("all")} active={selectedFilters.includes("all")} />
              <FilterButton content="Bowls" onClick={() => handleFilterSelect("bowls")} active={selectedFilters.includes("bowls")} />
              <FilterButton content="Decorative" onClick={() => handleFilterSelect("decorative")} active={selectedFilters.includes("decorative")} />
              <FilterButton content="Food" onClick={() => handleFilterSelect("food")} active={selectedFilters.includes("food")} />
              <FilterButton content="Matching Set" onClick={() => handleFilterSelect("set")} active={selectedFilters.includes("set")} />
              <FilterButton content="Plates" onClick={() => handleFilterSelect("plates")} active={selectedFilters.includes("plates")} />
            </HStack>
            {renderGallery}
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
