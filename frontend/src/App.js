import React from 'react';
import { Container, Title, Calculator, Display, Keyboard, MainKeys, Line, Key, OperationKeys } from './styles';

function App() {
  return (
    <>
      <Container>
        <Title>CALCULATOR</Title>

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
      </Container>
    </>
  );
}

export default App;
