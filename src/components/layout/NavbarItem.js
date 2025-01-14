import React, { useCallback, useMemo } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import { TextBody } from '../text/TextBody';

export const NavbarItem = ({ label, route, icon = undefined }) => {
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

  const isActive = useMemo(() => !route.startsWith('#') && location.pathname === route, [route, location]);

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} height="100%">
      {icon ? icon : <TextBody variants={isActive ? ['bold'] : []}>{label}</TextBody>}
    </div>
  );
};
