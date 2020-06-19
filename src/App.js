import React, { useState, useEffect, useRef } from 'react';
import { Container, Header, Title, Calculator, Display, Register, Result, Signal, Text, Keyboard, 
        MainKeys, Line, Key, Number, OperationKeys, SignalKey, ListKeys, ListTitle, Items, Icon } from './styles';

import './global.css';

function App() {
  const [valueDisplay, setValueDisplay] = useState('');
  const [signal, setSignal] = useState('');
  const [countNumbers, setCountNumbers] = useState(0);
  const [total, setTotal] = useState(0);
  const [prevSignal, setPrevSignal] = useState(0);
  const [fromOperation, setFromOperation] = useState(false);
  const [visibleTotal, setVisibleTotal] = useState(false);
  const [visibleSignal, setVisibleSignal] = useState(false);

  const container = useRef(null);

  useEffect(() => {
    container.current.focus();
  }, [])

  function handlePress(e) {
    let keyCode = e.key;
    switch(keyCode) {
      case "1":
        handleNumbers('1');
        break;
      case "2":
        handleNumbers('2');
        break;
      case "3":
        handleNumbers('3');
        break;
      case "4":
        handleNumbers('4');
        break;
      case "5":
        handleNumbers('5');
        break;
      case "6":
        handleNumbers('6');
        break;
      case "7":
        handleNumbers('7');
        break;
      case "8":
        handleNumbers('8');
        break;
      case "9":
        handleNumbers('9');
        break;
      case "0":
        handleNumbers('0');
        break;
      case "+":
        handleOperations(1);
        break;
      case "-":
        handleOperations(2);
        break;
      case "*":
        handleOperations(3);
        break;
      case "X":
        handleOperations(3);
        break;
      case "x":
        handleOperations(3);
        break;
      case "/":
        handleOperations(4);
        break;
      case "=":
        handleResult();
        break;
      case "C":
        handleClear();
        break;
      case "c":
        handleClear();
        break;
      case "A":
        handleClearAll();
        break;
      case "a":
        handleClearAll();
        break;
      default:
        return;
    }
  }

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
        case 5:
          setTotal(valueDisplay);
          break;
        default:
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
      setValueDisplay('');
      
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
      const intValue = parseInt(valueDisplay);
      switch(prevSignal) {
        case 1: 
          const sum = parseFloat(total) + intValue;
          const sumStr = String(sum).split("");
          return (sumStr.length <= 8) ? sum : (sumStr.slice(0, 10).join(""));       
        case 2: 
          const sub = parseFloat(total) - intValue;
          const subStr = String(sub).split("");
          return (subStr.length <= 8) ? sub : (subStr.slice(0, 10).join(""));
        case 3:
          const mult = parseFloat(total) * intValue;
          const multStr = String(mult).split("");
          return (multStr.length <= 8) ? mult : (multStr.slice(0, 10).join(""));
        case 4:
          const div = parseFloat(total) / intValue;
          const divStr = String(div).split("");
          return (divStr.length <= 8) ? div : (divStr.slice(0, 10).join(""));
        default:
          break;
      }
    })
    setVisibleSignal(false);
    setVisibleTotal(false);
    setPrevSignal(5);
  }

  function handleClearAll() {
    setTotal(0);
    setValueDisplay('');
    setVisibleSignal(false);
    setVisibleTotal(false);
    setCountNumbers(0);
  }

  function handleClear() {
    let str = valueDisplay.toString().substr(0, [valueDisplay.length - 1]);
    setValueDisplay(str);
    setCountNumbers(countNumbers - 1);
  }

  return (
    <>
      <Container onKeyDown={(e) => handlePress(e)} ref={container} tabIndex="0">
        <Header>
          <Title tabIndex='0'>CALCULATOR</Title>
        </Header>

        <Calculator>
          <Display>
            <Register>
              <Result visible={visibleTotal}>{total}</Result>
              <Signal visible={visibleSignal}>{signal}</Signal>
            </Register>
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
                <Key onClick={() => handleClear()}><Number>C</Number></Key>
                <Key onClick={() => handleClearAll()}><Number>CA</Number></Key>
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

        <ListKeys tabIndex='0'>
          <ListTitle tabIndex='0'>Keyboard Navigation</ListTitle>

          <Items tabIndex='0'>Page Elements Navigation: <Icon tabIndex='0'>Tab</Icon></Items>
          <Items tabIndex='0'>Return Navigation: <Icon tabIndex='0'>Tab</Icon> + <Icon tabIndex='0'>Shift</Icon></Items>
          <Items tabIndex='0'>Select: <Icon tabIndex='0'>Enter</Icon></Items>
          <Items tabIndex='0'>Numbers [0..9]: <Icon tabIndex='0'>0</Icon> .. <Icon tabIndex='0'>9</Icon></Items>
          <Items tabIndex='0'>Sum: <Icon tabIndex='0'>+</Icon></Items>
          <Items tabIndex='0'>Subtraction: <Icon tabIndex='0'>-</Icon></Items>
          <Items tabIndex='0'>Multiplication: <Icon tabIndex='0'>*</Icon> or <Icon tabIndex='0'>x</Icon> or <Icon tabIndex='0'>X</Icon></Items>
          <Items tabIndex='0'>Division: <Icon tabIndex='0'>/</Icon></Items>
          <Items tabIndex='0'>Equal: <Icon tabIndex='0'>=</Icon></Items>
          <Items tabIndex='0'>Clear: <Icon tabIndex='0'>c</Icon> or <Icon tabIndex='0'>C</Icon></Items>
          <Items tabIndex='0'>Clear All: <Icon tabIndex='0'>a</Icon> or <Icon tabIndex='0'>A</Icon></Items>
        </ListKeys>
      </Container>
    </>
  );
}

export default App;