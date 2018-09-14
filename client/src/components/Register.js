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

class Register extends Component {
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
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
        });
    }

    submitHandler = async (event, user) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3300/api/register', user);
            const token = response.data;
            localStorage.setItem('token', token);
            this.props.history.push('/api/jokes');
        } catch (error) {
            console.log(error);
        }
    }


    render() { 
        const LinkToLogin = <Link to='/api/login'>Login</Link>
        return ( 
            <Form className="login-form" onSubmit={(e) => this.submitHandler(e, this.state.user)}>
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

                
                    <Button type="submit">Register</Button>
                    <Text>Already have an account? {LinkToLogin}</Text>
                
            </Form>
         );
    }
}
 
export default Register;
