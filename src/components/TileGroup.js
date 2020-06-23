import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Tile from './Tile'

export default function TileGroup({help, solutions}) {
  const tiles = solutions.map(solution => {
    return (
      <Tile
        help = {help}
        solution = {solution}/>
    );
  });
  return (
    <div></div>
    // go through solutions 3 at a time
    // for each set of 3, create a new Row
    // go through all 3 row items, 1 at a time
    // for each row item, create a new Col + Tile
  );
}
