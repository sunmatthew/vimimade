import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import { VStack, Navbar, NavbarItem } from '../components/layout';
import { TextTitle } from '../components/text';
// import { FilterButton } from '../components/button';
import { Color } from '../styles/color';
import { PHOTOS } from '../constants/photos';
import Logo from '../images/logo-no-text.png';

const LOGO = <img src={Logo} alt="Vimimade Logo" width="35px" />;

// Hook to get window dimensions
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const getContentWidth = (screenWidth) => {
  if (screenWidth <= 600) return '100%';
  if (screenWidth <= 900) return '90%';
  if (screenWidth <= 1200) return '80%';
  return '1200px';
};

const Portfolio = () => {
  const navigate = useNavigate();
  const selectedFilters = ['all'];
  const { width } = useWindowSize();

  // Determine number of columns based on screen width
  const getColumns = useMemo(() => {
    if (width <= 600) return 2;
    if (width <= 900) return 2;
    if (width <= 1200) return 3;
    return 4;
  }, [width]);

  const filteredPhotos = useMemo(() => {
    if (selectedFilters.includes('all')) {
      return PHOTOS;
    }

    return PHOTOS.filter((photo) => {
      if (photo.key) {
        const tags = photo.key.split(',');
        return selectedFilters.every((f) => tags.includes(f));
      }
      return false;
    });
  }, [selectedFilters]);

  const renderGallery = useMemo(() => {
    return (
      <Gallery
        photos={filteredPhotos}
        direction="column"
        columns={getColumns}
        margin={10}
      />
    );
  }, [filteredPhotos, getColumns]);

  const handleAboutClick = useCallback(() => {
    navigate('/', { state: { shouldScrollToAbout: true, from: 'portfolio' } });
  }, [navigate]);

  const handleContactClick = useCallback(() => {
    navigate('/', {
      state: { shouldScrollToContact: true, from: 'portfolio' },
    });
  }, [navigate]);

  // const handleFilterSelect = useCallback(
  //   (filter) => {
  //     if (selectedFilters.includes(filter)) {
  //       // if the last filter is deselected, auto-select the ALL filter
  //       if (selectedFilters.length == 1) {
  //         setSelectedFilters(['all']);
  //       } else {
  //         setSelectedFilters(selectedFilters.filter((f) => f != filter));
  //       }
  //     } else {
  //       // always deselect ALL if its the only one selected
  //       if (selectedFilters.length === 1 && selectedFilters[0] === 'all') {
  //         setSelectedFilters([filter]);
  //       } else {
  //         setSelectedFilters([...selectedFilters, filter]);
  //       }
  //     }
  //   },
  //   [selectedFilters]
  // );

  const contentWidth = useMemo(() => getContentWidth(width), [width]);
  const isSmallScreen = width <= 600;

  // const filterButtons = useMemo(
  //   () => (
  //     <HStack
  //       gap={10}
  //       wrap={isSmallScreen ? 'wrap' : 'nowrap'}
  //       justifyContent={isSmallScreen ? 'center' : 'flex-start'}
  //     >
  //       <FilterButton
  //         content="All"
  //         onClick={() => handleFilterSelect('all')}
  //         active={selectedFilters.includes('all')}
  //       />
  //       <FilterButton
  //         content="Bowls"
  //         onClick={() => handleFilterSelect('bowls')}
  //         active={selectedFilters.includes('bowls')}
  //       />
  //       <FilterButton
  //         content="Decorative"
  //         onClick={() => handleFilterSelect('decorative')}
  //         active={selectedFilters.includes('decorative')}
  //       />
  //       <FilterButton
  //         content="Food"
  //         onClick={() => handleFilterSelect('food')}
  //         active={selectedFilters.includes('food')}
  //       />
  //       <FilterButton
  //         content="Matching Set"
  //         onClick={() => handleFilterSelect('set')}
  //         active={selectedFilters.includes('set')}
  //       />
  //       <FilterButton
  //         content="Plates"
  //         onClick={() => handleFilterSelect('plates')}
  //         active={selectedFilters.includes('plates')}
  //       />
  //     </HStack>
  //   ),
  //   [isSmallScreen, selectedFilters, handleFilterSelect]
  // );

  return (
    <VStack color={Color.PRIMARY} isPageContainer>
      <Navbar
        color={Color.BEIGHT_DARK}
        align="center"
        gap={2}
        textColor={Color.PRIMARY}
        vSpacing={10}
        isBottom
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

      <VStack
        width="100%"
        alignItems="center"
        spacingTop="60px"
        spacingBottom="160px"
      >
        <VStack
          gap={30}
          width={contentWidth}
          spacingTop="60px"
          spacingBottom="160px"
          style={{ padding: isSmallScreen ? '0 20px' : 0 }}
        >
          <TextTitle color={Color.WHITE} textAlign="center">
            PORTFOLIO
          </TextTitle>
          <VStack gap={10}>
            {/* {filterButtons} */}
            {renderGallery}
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Portfolio;
