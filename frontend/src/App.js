import React from 'react';
import { Container, Title, Calculator, Display, Signal, Text, Keyboard, MainKeys, Line, Key, Number, OperationKeys, SignalKey } from './styles';

function App() {
  return (
    <>
      <Container>
        <Title>CALCULATOR</Title>

        <Calculator>
          <Display>
            <Signal>+</Signal>
            <Text>700</Text>
          </Display>
          <Keyboard >
            <MainKeys>
              <Line>
                <Key><Number>7</Number></Key>
                <Key><Number>8</Number></Key>
                <Key><Number>9</Number></Key>
              </Line>
              <Line>
                <Key><Number>4</Number></Key>
                <Key><Number>5</Number></Key>
                <Key><Number>6</Number></Key>
              </Line>
              <Line>
                <Key><Number>1</Number></Key>
                <Key><Number>2</Number></Key>
                <Key><Number>3</Number></Key>
              </Line>
              <Line>
                <Key><Number>0</Number></Key>
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
