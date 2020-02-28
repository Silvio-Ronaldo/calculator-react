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

export const Display = styled.section``;

export const Keyboard = styled.div``;

export const MainKeys = styled.section``;

export const Line = styled.div``;

export const Key = styled.button``;

export const OperationKeys = styled.aside``;



