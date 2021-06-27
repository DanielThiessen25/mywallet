import Screen from "./Screen";
import styled from 'styled-components';
import { useState} from 'react';

export default function Login(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    return(
        <Screen>
            <LoginArea>
                <Logo>MyWallet</Logo>
                <input placeholder="E-mail" required type="e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="Senha" required type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button>Entrar</button>
                Primeira vez? Cadastre-se!
            </LoginArea>
            
        </Screen>
    );
}

const Logo = styled.div`
    font-family: 'Saira Stencil One', cursive;
    font-style: normal; 
    font-weight: normal;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 25px;
`;

const LoginArea = styled.div`
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