import Screen from "./Screen";
import { useState } from 'react';
import styled from 'styled-components';

export default function AddOut() {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    return (

        <Screen>
            <Heading>
                Nova saída
            </Heading>
            <InputArea>
                <input placeholder="Valor" required type="text" value={amount} onChange={e => setAmount(e.target.value)} />
                <input placeholder="Descrição" required type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <button>Salvar saída</button>
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

const InputArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;

    input{
        width: 100%;
        height: 60px;
        border: none;
        padding: 18px 0 18px 15px;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        margin-bottom: 15px;
        border-radius: 5px;
    }
    button{
        width: 100%;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        margin-bottom: 36px;
    }
`;

const Fill = styled.div`
    width: 100%;
    height: 100%;
`;