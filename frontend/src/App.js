import React, { useState } from 'react';
import { Container, Title, Calculator, Display, Result, Signal, Text, Keyboard, MainKeys, Line, Key, Number, OperationKeys, SignalKey } from './styles';

function App() {
  const [valueDisplay, setValueDisplay] = useState('');
  const [countNumbers, setCountNumbers] = useState(0);
  const [total, setTotal] = useState(0);
  const [fromOperation, setFromOperation] = useState(false);
  const [signal, setSignal] = useState('');
  const [visibleTotal, setVisibleTotal] = useState(false);
  const [visibleSignal, setVisibleSignal] = useState(false);
  const [prevSignal, setPrevSignal] = useState(0);

  function handleNumbers(i) {
    setVisibleTotal(true);

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
      switch(prevSignal) {
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

      if(operation === 1) {
        setSignal('+');
      } else if(operation === 2) {
        setSignal('-');
      } else if(operation === 3) {
        setSignal('*');
      } else {
        setSignal('/');
      }
      setFromOperation(true);
      
    } else if(valueDisplay !== '') {
      
      if(operation === 1) {
        setSignal('+');
      } else if(operation === 2) {
        setSignal('-');
      } else if(operation === 3) {
        setSignal('*');
      } else {
        setSignal('/');
      }

      setTotal((parseInt(valueDisplay)));
      setFromOperation(true);
    }
    setCountNumbers(0);
    setVisibleSignal(true);
    setVisibleTotal(true);
    setPrevSignal(operation);
  }

  function handleResult() {
    setValueDisplay(() => {
      switch(prevSignal) {
        case 1: 
          return (total + valueDisplay);
        case 2: 
          return (total - valueDisplay);
        case 3:
          return (total * valueDisplay);
        case 4:
          return (total / valueDisplay);
      }
    })
    setVisibleSignal(false);
    setVisibleTotal(false);
  }

  function handleClear() {
    setTotal(0);
    setValueDisplay('');
    setVisibleSignal(false);
    setVisibleTotal(false);
  }

  return (
    <>
      <Container>
        <Title>CALCULATOR</Title>

        <Calculator>
          <Display>
            <Result visible={visibleTotal}>{total}</Result>
            <Signal visible={visibleSignal}>{signal}</Signal>
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
                <Key onClick={() => handleClear()}><Number>C</Number></Key>
              </Line>  
            </MainKeys>

            <OperationKeys>
                <SignalKey onClick={ () => handleOperations(4) }><Number>/</Number></SignalKey>
                <SignalKey onClick={ () => handleOperations(3) }><Number>*</Number></SignalKey>
                <SignalKey onClick={ () => handleOperations(2) }><Number>-</Number></SignalKey>
                <SignalKey onClick={ () => handleOperations(1) }><Number>+</Number></SignalKey>
                <SignalKey onClick={ () => handleResult() }><Number>=</Number></SignalKey>
            </OperationKeys>
          </Keyboard>
        </Calculator>
      </Container>
    </>
  );
}

export default App;
