import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    background: green;
`;

export const Title = styled.h1`
    grid-column-start: 2;
    grid-column-end: 3;
    font-size: 30px;
    color: white;
    font-family: 'Verdana';
    justify-self: center;
`;

export const Calculator = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    background: #999;
    height: 500px;
    margin-top: 5px; 
    margin-bottom: 5px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    padding: 10px;
`;

export const Display = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr;
    background: orange;
    height: 100px;
    border-radius: 10px;
    padding: 5px;
    color: white;
`;

export const Result = styled.text`
    visibility: ${props => props.visible ? "none" : "hidden" };
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: right;
    margin-top: 5px;
    margin-right: 10px;
    padding: 0px;
    font-size: 30px;
    font-family: 'Verdana', sans-serif;
`;

export const Signal = styled.text`
    visibility: ${props => props.visible ? "none" : "hidden"};
    grid-row-start: 1;
    grid-row-end: 2;
    justify-self: right;
    margin-top: 5px;
    margin-right: 10px;
    font-size: 30px;
    font-weight: bold;
    visibility: none;
`;

export const Text = styled.text`
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: right;
    font-size: 60px;
    margin-right: 10px;
    font-family: 'Verdana', sans-serif;  
`;

export const Keyboard = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 370px;
    background: pink;
    padding: 10px;
    margin-top: 5px;
    border-radius: 10px;
`;

export const MainKeys = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    background: brown;
    border-radius: 10px;
    padding: 10px;
`;

export const Line = styled.div`
    justify-self: center;
    padding: 5px;
`;

export const Key = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    margin-left: 17px;
    margin-bottom: 5px;
    background: #999;
    cursor: pointer;
`;

export const Number = styled.text`
    color: white;
    font-weight: bold;
    font-size: 30px;
    font-family: 'Verdana';
`;

export const OperationKeys = styled.aside``;

export const SignalKey = styled(Key)`
    background: teal;
`;



