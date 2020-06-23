import Board from './components/Board'
import CheatButton from './components/CheatButton'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import HintsSwitch from './components/HintsSwitch'
import NewButton from './components/NewButton'
import React from 'react';
import ResetButton from './components/ResetButton'
import Row from 'react-bootstrap/Row'
import UndoButton from './components/UndoButton'

function App({appController}) {
  return (
    <Container>
      <Row>
        <Col>
          <NewButton />
        </Col>
        <Col>
          <ResetButton />
        </Col>
        <Col>
          <UndoButton />
        </Col>
      </Row>
      <Row>
        <Col>
          <Board />
        </Col>
      </Row>
      <Row>
        <Col>
          <CheatButton />
        </Col>
        <Col>
          <HintsSwitch />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
