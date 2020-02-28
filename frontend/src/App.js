import React from 'react';
import { Calculator, Display, Keyboard, MainKeys, Line, Key, OperationKeys } from './styles';

function App() {
  return (
    <>
      <Calculator>
        <Display>

        </Display>
        <Keyboard >
          <MainKeys>
            <Line>
              <Key></Key>
              <Key></Key>
              <Key></Key>
            </Line>
            <Line>
              <Key></Key>
              <Key></Key>
              <Key></Key>
            </Line>
            <Line>
              <Key></Key>
              <Key></Key>
              <Key></Key>
            </Line>
            <Line>
              <Key></Key>
              <Key></Key>
              <Key></Key>
            </Line>  
          </MainKeys>

          <OperationKeys>
              <Key></Key>
              <Key></Key>
              <Key></Key>
              <Key></Key>
              <Key></Key>
          </OperationKeys>
        </Keyboard>
      </Calculator>
    </>
  );
}

export default App;
