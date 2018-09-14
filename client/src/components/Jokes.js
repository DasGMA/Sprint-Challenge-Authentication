import React, {Component} from 'react';
import axios from 'axios';
//import styled from 'styled-components';
const jwtDecode = require('jwt-decode');

class Jokes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            username: ''
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
            jokes: response.data
        });
    } catch (error) {
        console.log(error, error.message)
    }
}


onClick = () => {
    localStorage.removeItem('token');
    this.props.history.push('/api/login');
}

    render() { 
        return ( 
            <div>
            <p onClick = {this.onClick}>Logout</p>
                    {this.state.jokes.map((joke, index) => 
                        
                        <div key={index}>
                        <div>{joke.id}</div>
                        <div>{joke.type}</div>
                        <div>{joke.setup}</div>
                        <div>{joke.punchline}</div>
                        </div>
                    )
                    }
            </div>
         );
    }
}
 
export default Jokes;