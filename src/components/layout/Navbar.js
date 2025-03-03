import React, { useState, useEffect } from 'react';
import { Color } from '../../styles/color';
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
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [horizontalPadding, setHorizontalPadding] = useState('100px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(isMobileWidth(width));

      // Calculate responsive padding
      if (isMobileWidth(width)) {
        setHorizontalPadding('20px');
      } else {
        // For larger screens, use vw with min/max bounds
        const vwPadding = Math.min(Math.max(width * 0.05, 40), 120);
        setHorizontalPadding(`${vwPadding}px`);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
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

  // Split children into logo and nav items
  const logo = React.Children.toArray(children).find(
    (child) => child.type.name === 'NavbarLogo'
  );
  const navItems = React.Children.toArray(children).filter(
    (child) => child.type.name !== 'NavbarLogo'
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
        <div style={childStyle}>{logo}</div>
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
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
                {navItems.map((item, index) => (
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
            {navItems.map((item, index) => (
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
