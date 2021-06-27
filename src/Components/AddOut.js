import Screen from "./Screen";
import { useState } from 'react';
import styled from 'styled-components';
import InputArea from "./InputArea";

export default function AddOut() {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    function doAddOut(){

    }

    return (

        <Screen>
            <Heading>
                Nova saída
            </Heading>
            <InputArea>
                <form onSubmit={doAddOut}>
                    <input placeholder="Valor" required type="text" value={amount} onChange={e => setAmount(e.target.value)} />
                    <input placeholder="Descrição" required type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    <button type="submit">Salvar saída</button>
                </form>
            </InputArea>
            <Fill></Fill>
        </Screen>
    );
}

const Heading = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-bottom: 23px;
`;


const Fill = styled.div`
    width: 100%;
    height: 100%;
`;