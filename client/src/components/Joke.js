import React from 'react';
import styled from 'styled-components';

const JokeCard = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Type = styled.div`

    max-width: 125px;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    font-size: 1.8rem;
    background-color: #2b7a78;
    color: #feffff;
`

const Setup = styled.div`
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    background: #17252a;
    color: #fff;

`

const Punchline = styled.div`
    border-radius: 0 0 5px 5px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    background: #3aafa9;
    color: #fff;
`

const Joke = (props) => {
    return (
        <JokeCard>
        <Type>{props.type}</Type>
        <Setup>{props.setup}</Setup>
        <Punchline>{props.punchline}</Punchline>
        </JokeCard>
    )
}

export default Joke;