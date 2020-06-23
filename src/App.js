import Board from './components/Board'
import CheatButton from './components/CheatButton'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import HintsSwitch from './components/HintsSwitch'
import NewButton from './components/NewButton'
import React, { useState } from 'react';
import ResetButton from './components/ResetButton'
import Row from 'react-bootstrap/Row'
import UndoButton from './components/UndoButton'

function App({appController}) {
  const [useHelp, setUseHelp] = useState(true);
  const [guesses, setGuesses] = useState("");
  const [solutions, setSolutions] = useState("");
  return (
    <Container>
      <Row>
        <Col>
          <NewButton
            onClick = {(difficulty) => {
              setGuesses("");
              setSolutions(appController.new(difficulty));
            }}/>
        </Col>
        <Col>
          <ResetButton
            onClick = {() => {
              setGuesses(appController.reset());
            }}/>
        </Col>
        <Col>
          <UndoButton
            onClick = {() => {
              setGuesses(appController.undo());
            }}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Board
            help = {useHelp}
            guesses = {guesses}
            onGuess = {(index, value) => {
              setGuesses(appController.guess(index, value));
            }}
            onSolved = {() => {
              // congrats!
            }}
            solutions = {solutions}
            />
        </Col>
      </Row>
      <Row>
        <Col>
          <CheatButton
            onClick = {() => {
              setGuesses(appController.cheat());
            }}/>
        </Col>
        <Col>
          <HintsSwitch
            onChange = {() => setUseHelp(!useHelp)}
            useHints = {useHelp}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
