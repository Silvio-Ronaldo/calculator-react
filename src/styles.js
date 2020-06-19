import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: #DFF0D8;
    outline: 0px solid transparent;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    background-color: darkgreen;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: #FFF;
    font-family: 'Verdana';
    font-weight: bold;
    outline-color: red;
    outline-width: 5px;
`;

export const Main = styled(Container)`
    margin-top: 5px;
    flex-direction: row;
`;

export const Calculator = styled.div`
    background: #468847;
    align-self: center;
    height: 520px;
    width: 420px; 
    margin-bottom: 5px;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    padding: 10px;
`;

export const Display = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: white;
    height: 120px;
    border-radius: 10px;
    padding: 5px;
`;

export const Register = styled.div``;

export const Result = styled.text`
    visibility: ${props => props.visible ? "none" : "hidden" };
    margin-top: 5px;
    margin-right: 10px;
    padding: 0px;
    font-size: 30px;
    font-family: 'Verdana', sans-serif;
    color: #468847;
`;

export const Signal = styled.text`
    visibility: ${props => props.visible ? "none" : "hidden"};
    margin-top: 5px;
    margin-right: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #468847;
`;

export const Text = styled.text`
    font-size: 60px;
    margin-right: 10px;
    font-family: 'Verdana', sans-serif; 
    color: #468847; 
`;

export const Keyboard = styled.div`
    display: flex;
    height: 370px;
    background: #468847;
    margin-top: 5px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const MainKeys = styled.section``;

export const Line = styled.div`
    padding: 5px;
`;

export const Key = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-right: 17px;
    margin-bottom: 5px;
    background: #DFF0D8;
    cursor: pointer;
    box-shadow: 3px 3px 3px black;
    outline-color: red;
    outline-width: 5px;
`;

export const Number = styled.text`
    color: #468847;
    font-weight: bold;
    font-size: 30px;
    font-family: 'Verdana';
`;

export const OperationKeys = styled(MainKeys)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 15px;
    margin-left: 30px;
`;

export const SignalKey = styled(Key)`
    background: #DFF0D8;
    margin-right: 0;
`;

export const ListKeys = styled.ul` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 550px;
    width: 400px;
    padding: 10px;
    margin-bottom: 5px;
    margin-right: 20px;
    background: #468847;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    outline-color: red;
    outline-width: 5px;
`;

export const ListTitle = styled(Title)`
    align-self: center;
    color: #DFF0D8;
    font-size: 20px;
    font-weight: bold;
    outline-color: red;
    outline-width: 5px;
`;

export const Items = styled.li`
    list-style: none;
    font-size: 20px;
    font-family: 'Verdana', sans-serif;
    color: #DFF0D8;
    margin-top: 20px;
    outline-color: red;
    outline-width: 5px;
`;

export const Icon = styled.div`
    display: inline;
    border-radius: 5px;
    box-shadow: 3px 3px 3px black;
    background: #DFF0D8;
    padding: 5px;
    color: #468847;
    outline-color: red;
    outline-width: 5px;
`;