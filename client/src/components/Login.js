import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`


`
const Input = styled.input`

`
const Text = styled.p`

    
    
`

const Button = styled.button`
    
   
    
`



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: {
                username: '',
                password: ''
            }
         }
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.history.replace('/api/jokes')
        }
    }

    changeHandler = (event) => {
        this.setState({ user: {
            ...this.state.user,
            [event.target.name]: event.target.value 
        }});
    }

    submitHandler = async (event, user) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3300/api/login', user);
            const token = response.data;
            localStorage.setItem('token', token);
            this.props.history.push('/api/jokes');
        } catch (error) {
            console.log(error, 'Something went wrong.')
        }
    }


    render() { 
        const LinkToRegister = <Link to='/api/register'>Register</Link>
        return ( 
                <Form className="login" onSubmit={(event) => this.submitHandler(event, this.state.user)}>
                    <Input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        required
                        onChange={this.changeHandler}
                    />

                    <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        required
                        onChange={this.changeHandler}
                    />

                    
                        <Button type="submit">Login</Button>
                        <Text>Don't have an account? {LinkToRegister}</Text>
                    
                </Form>
         );
    }
}
 
export default Login;