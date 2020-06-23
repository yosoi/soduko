import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import EasyIcon from './icons/EasyIcon'
import HardIcon from './icons/HardIcon'
import MediumIcon from './icons/MediumIcon'
import React from 'react';

export default function NewButton() {
  const dropdownItems = [
    {icon: <EasyIcon />, text: "Puzzling"},
    {icon: <MediumIcon />, text: "Challenging"},
    {icon: <HardIcon />, text: "Frustrating"}
  ].map((item, index) => {
    return (
      <Dropdown.Item key={index}>
        {item.icon}
        <span>
          {item.text}
        </span>
      </Dropdown.Item>
    );
  });
  return (
    <DropdownButton
      id="new-puzzle-dropdown-button"
      title="New Puzzle">
      {dropdownItems}
    </DropdownButton>
  );
}
