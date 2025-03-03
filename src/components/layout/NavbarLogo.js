import React, { useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextBody } from '../text/TextBody';
import { HStack } from './HStack';

export const NavbarLogo = ({
  route,
  logo,
  logoText,
  textColor,
  align = 'left',
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(() => {
    if (route.startsWith('#')) {
      const sectionId = route.substring(1);
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(route);
    }
  }, [route, navigate]);

  const isActive = useMemo(
    () => !route.startsWith('#') && location.pathname === route,
    [route, location]
  );

  return (
    <div
      onClick={handleClick}
      style={{ cursor: 'pointer', height: '100%', alignItems: align }}
    >
      <HStack gap={10}>
        {logo}
        {logoText && (
          <TextBody variants={isActive ? ['bold'] : []} color={textColor}>
            {logoText}
          </TextBody>
        )}
      </HStack>
    </div>
  );
};
