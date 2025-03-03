import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Color } from '../../styles/color';
import { TextBody } from '../text/TextBody';
import { HStack } from './HStack';
import MobileMenu from '../../images/mobile-menu.png';
import CloseMenu from '../../images/mobile-close-menu-icon.png';
import { isMobileWidth } from '../../constants/breakpoints';

export const Navbar = ({
  children,
  color = Color.SECONDARY,
  gap = 0,
  vSpacing = 0,
  textColor,
  isBottom = false,
  isFixed = false,
  logo,
  logoText,
  logoRoute = '/',
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [horizontalPadding, setHorizontalPadding] = useState('100px');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(isMobileWidth(width));

      if (isMobileWidth(width)) {
        setHorizontalPadding('20px');
      } else {
        const vwPadding = Math.min(Math.max(width * 0.05, 40), 120);
        setHorizontalPadding(`${vwPadding}px`);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLogoClick = useCallback(() => {
    if (logoRoute.startsWith('#')) {
      const sectionId = logoRoute.substring(1);
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(logoRoute);
    }
  }, [logoRoute, navigate]);

  const isLogoActive =
    !logoRoute.startsWith('#') && location.pathname === logoRoute;
  const gapStyle = `${gap * 32}px`;

  const childStyle = {
    margin: '0px 0px',
    color: textColor,
  };

  const mobileMenuItemStyle = {
    ...childStyle,
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    fontSize: '18px',
  };

  const logoComponent = logo && (
    <div
      onClick={handleLogoClick}
      style={{ cursor: 'pointer', height: '100%' }}
    >
      <HStack gap={10}>
        {logo}
        {logoText && (
          <TextBody variants={isLogoActive ? ['bold'] : []} color={textColor}>
            {logoText}
          </TextBody>
        )}
      </HStack>
    </div>
  );

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: color,
        marginTop: isBottom ? 'auto' : 0,
        position: isFixed ? 'fixed' : 'inherit',
        bottom: isBottom && isFixed ? 0 : null,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: `${vSpacing * 2}px`,
          paddingBottom: `${vSpacing * 2}px`,
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
        }}
      >
        <div style={childStyle}>{logoComponent}</div>
        {isMobile ? (
          <>
            {!isMenuOpen && (
              <img
                src={MobileMenu}
                alt="Menu"
                width="24px"
                style={{ cursor: 'pointer', zIndex: 1001 }}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
            <div
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '75%',
                backgroundColor: color,
                transform: `translateX(${isMenuOpen ? '0' : '100%'})`,
                transition: 'transform 0.3s ease-in-out',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    cursor: 'pointer',
                    width: '40px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: textColor,
                    fontSize: '24px',
                    zIndex: 1002,
                  }}
                >
                  <img src={CloseMenu} alt="Close Menu" width="16px" />
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {React.Children.map(children, (item, index) => (
                  <div
                    key={index}
                    style={mobileMenuItemStyle}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {isMenuOpen && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  zIndex: 999,
                }}
                onClick={() => setIsMenuOpen(false)}
              />
            )}
          </>
        ) : (
          <div style={{ display: 'flex', gap: gapStyle }}>
            {React.Children.map(children, (item, index) => (
              <div key={index} style={childStyle}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
