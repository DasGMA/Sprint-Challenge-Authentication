import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    
    render() { 
        return ( 
            <div className='nav-wrap'>
                <Link to='/api/login'>Login</Link>
                <Link to='/api/register'>Register</Link>
            </div>
         );
    }
}
 
export default Navigation;