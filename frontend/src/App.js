import React, { useState } from 'react';
import { Container, Title, Calculator, Display, Result, Signal, Text, Keyboard, MainKeys, Line, Key, Number, OperationKeys, SignalKey } from './styles';

function App() {
  const [valueDisplay, setValueDisplay] = useState('');
  const [countNumbers, setCountNumbers] = useState(0);
  const [total, setTotal] = useState(0);
  const [fromOperation, setFromOperation] = useState(false);

  function handleNumbers(i) {
    if(countNumbers < 10) {
      if(fromOperation) {
        setValueDisplay(i);
        setFromOperation(false);
      } else {
        setValueDisplay(valueDisplay + i);
      }
      setCountNumbers(countNumbers + 1);
    } else {
      return;
    }

  }

  function handleOperations(operation) {
    if((valueDisplay !== '') && (total !== 0)) {
      switch(operation) {
        case 1:
          setTotal(total + (parseInt(valueDisplay)));
          break;
        case 2:
          setTotal(total - (parseInt(valueDisplay)));
          break;
        case 3:
          setTotal(total * (parseInt(valueDisplay)));
          break;
        case 4:
          setTotal(total / (parseInt(valueDisplay)));
          break;
      }
      setFromOperation(true);
    } else if(valueDisplay !== '') {
      setTotal((parseInt(valueDisplay)));
      setFromOperation(true);
    }
    setCountNumbers(0);
  }

  return (
    <>
      <Container>
        <Title>CALCULATOR</Title>

        <Calculator>
          <Display>
            <Result>{total}</Result>
            <Signal>+</Signal>
            <Text>{valueDisplay}</Text>
          </Display>
          <Keyboard>
            <MainKeys>
              <Line>
                <Key onClick={ () => handleNumbers('7') }><Number>7</Number></Key>
                <Key onClick={ () => handleNumbers('8') }><Number>8</Number></Key>
                <Key onClick={ () => handleNumbers('9') }><Number>9</Number></Key>
              </Line>
              <Line>
                <Key onClick={ () => handleNumbers('4') }><Number>4</Number></Key>
                <Key onClick={ () => handleNumbers('5') }><Number>5</Number></Key>
                <Key onClick={ () => handleNumbers('6') }><Number>6</Number></Key>
              </Line>
              <Line>
                <Key onClick={() => handleNumbers('1') }><Number>1</Number></Key>
                <Key onClick={() => handleNumbers('2') }><Number>2</Number></Key>
                <Key onClick={() => handleNumbers('3') }><Number>3</Number></Key>
              </Line>
              <Line>
                <Key onClick={() => handleNumbers('0') }><Number>0</Number></Key>
                <Key><Number>.</Number></Key>
                <Key><Number>C</Number></Key>
              </Line>  
            </MainKeys>

            <OperationKeys>
                <SignalKey onClick={ () => handleOperations(4) }><Number>/</Number></SignalKey>
                <SignalKey onClick={ () => handleOperations(3) }><Number>*</Number></SignalKey>
                <SignalKey onClick={ () => handleOperations(2) }><Number>-</Number></SignalKey>
                <SignalKey onClick={ () => handleOperations(1) }><Number>+</Number></SignalKey>
                <SignalKey><Number>=</Number></SignalKey>
            </OperationKeys>
          </Keyboard>
        </Calculator>
      </Container>
    </>
  );
}

export default App;
