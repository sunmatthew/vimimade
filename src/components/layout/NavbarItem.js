import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { TextTitle } from '../text/TextTitle'; // Import your TextTitle component

export const NavbarItem = ({ label, route }) => {
  const navigate = useNavigate(); // Get the navigate function

  const handleClick = () => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <TextTitle>{label}</TextTitle>
    </div>
  );
};
