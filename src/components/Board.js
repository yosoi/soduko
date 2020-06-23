import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'
import TileGroup from './TileGroup'

export default function Board({
  help,
  onSolved,
  solutions
}) {
  return (
    <div></div>
    // go through solutions 27 items at a time
    // for each set of 27 items, create a new row
    // go through all 27 row items, 9 items at a time
    // for each set of 9 items, create a new Col + TileGroup
  );
}
