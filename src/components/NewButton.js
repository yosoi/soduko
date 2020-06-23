import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import EasyIcon from './icons/EasyIcon'
import HardIcon from './icons/HardIcon'
import MediumIcon from './icons/MediumIcon'
import React from 'react';

export default function NewButton({onClick}) {
  const dropdownItems = [{
    code: "easy",
    icon: <EasyIcon />,
    text: "Puzzling"
  },{
    code: "medium",
    icon: <MediumIcon />,
    text: "Challenging"
  },{
    code: "hard",
    icon: <HardIcon />,
    text: "Frustrating"
  }].map((item, index) => {
    return (
      <Dropdown.Item
        as = {Button}
        key = {index}
        onClick = {() => onClick(item.code)}>
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
