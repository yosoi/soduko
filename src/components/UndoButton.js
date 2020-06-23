import Button from 'react-bootstrap/Button'
import React from 'react'
import UndoIcon from './icons/UndoIcon'

export default function UndoButton({onClick}) {
  return (
    <Button>
      <UndoIcon onClick={onClick}/>
    </Button>
  );
}
