import React, { useState, useEffect } from 'react';
import { Container, Title, Calculator, Display, Signal, Text, Keyboard, MainKeys, Line, Key, Number, OperationKeys, SignalKey } from './styles';

function App() {
  const [valueDisplay, setValueDisplay] = useState('');

  function handleClick(i) {
    setValueDisplay(valueDisplay + i);
  }

  return (
    <>
      <Container>
        <Title>CALCULATOR</Title>

        <Calculator>
          <Display>
            <Signal>+</Signal>
            <Text>{valueDisplay}</Text>
          </Display>
          <Keyboard>
            <MainKeys>
              <Line>
                <Key onClick={ () => handleClick(7) }><Number>7</Number></Key>
                <Key onClick={ () => handleClick(8) }><Number>8</Number></Key>
                <Key onClick={ () => handleClick(9) }><Number>9</Number></Key>
              </Line>
              <Line>
                <Key onClick={ () => handleClick(4) }><Number>4</Number></Key>
                <Key onClick={ () => handleClick(5) }><Number>5</Number></Key>
                <Key onClick={ () => handleClick(6) }><Number>6</Number></Key>
              </Line>
              <Line>
                <Key onClick={() => handleClick(1) }><Number>1</Number></Key>
                <Key onClick={() => handleClick(2) }><Number>2</Number></Key>
                <Key onClick={() => handleClick(3) }><Number>3</Number></Key>
              </Line>
              <Line>
                <Key onClick={() => handleClick(0) }><Number>0</Number></Key>
                <Key><Number>.</Number></Key>
                <Key><Number>C</Number></Key>
              </Line>  
            </MainKeys>

            <OperationKeys>
                <SignalKey><Number>/</Number></SignalKey>
                <SignalKey><Number>*</Number></SignalKey>
                <SignalKey><Number>-</Number></SignalKey>
                <SignalKey><Number>+</Number></SignalKey>
                <SignalKey><Number>=</Number></SignalKey>
            </OperationKeys>
          </Keyboard>
        </Calculator>
      </Container>
    </>
  );
}

export default App;
