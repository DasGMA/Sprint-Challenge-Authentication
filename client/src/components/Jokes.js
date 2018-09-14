import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Joke from './Joke';

const jwtDecode = require('jwt-decode');

const JokesWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 880px;
    width: 100%;
    margin: 10px auto;
    justify-content: center;
    align-items: center;


`

const Button = styled.button`
    
    display: inline-block;
    border-radius: 4px;
    background-color: rgba(244, 81, 30, 0.7);
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    width: 100px;
    transition: all 0.7s;
    cursor: pointer;
    margin: 10px;
    :hover {
        background-color: rgba(244, 81, 30, 1);
    }
    
`



class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            username: '',
            loggedIn: false
         }
    }

componentDidMount() {
    this.getJokes();
}

getJokes = async () => {
    const token = localStorage.getItem('token');
    if (!token){
        this.props.history.replace('/api/login');
    }

    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3300/api/jokes',
            headers: { authorization: token }
        });

        const decoded = jwtDecode(token);
        this.setState({
            username: decoded.username,
            jokes: response.data,
            loggedIn: true
        });
    } catch (error) {
        console.log(error, error.message);
        this.setState({loggedIn: false})
    }
}


onClick = () => {
    localStorage.removeItem('token');
    this.props.history.push('/api/login');
    this.setState({loggedIn: false})
    
}

    render() { 
        return ( 
            <JokesWrap>
            <Button onClick = {this.onClick}>Logout</Button>
                    {this.state.jokes.map((joke, index) => 

                        <Joke 
                            key={index}
                            type={joke.type}
                            setup={joke.setup}
                            punchline={joke.punchline}
                        />
                    )
                    }
            </JokesWrap>
         );
    }
}
 
export default Jokes;