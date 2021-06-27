import Screen from "./Screen";
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { useState, useContext} from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import { IoExitOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

export default function Welcome() {
    const { user, setUser } = useContext(UserContext);
    return (
        <Screen>
            <Heading>
                Olá, Fulano
                <IoExitOutline color="#FFFFFF" size="1.4em"/>
            </Heading>
            <RecordsArea></RecordsArea>
            <OptionsContainer>
                <Option>
                    <IoAddCircleOutline color="#FFFFFF" size="1.8em" />
                    <p>Nova entrada</p>
                </Option>
                <Option>
                <IoRemoveCircleOutline color="#FFFFFF" size="1.8em" />
                    <p>Nova saída</p>

                </Option>
            </OptionsContainer>
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

const RecordsArea = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #FFFFFF;
`;

const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

`;

const Option = styled.div`
    width: 156px;
    height: 114px;
    padding: 10px;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        word-spacing: 9999rem;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;
        color: #FFFFFF;

    }
`;