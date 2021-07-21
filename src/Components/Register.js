import React,{ Component } from 'react';
import Header from './Header';
import '../App.css';

class Register extends Component{
render(){
    return(
        <div className="container">
        <div className="form" style={{width:"28%",margin:"30vh auto"}}>
            <div className="input-group mb-3 d-flex justify-content-center">
               <img src="logo.png" alt="logo"/>
            </div>
            <div className="input-group mb-3">
                <input type="text" placeholder="Username" className="form-control" />
            </div>
            <div className="input-group mb-3">
                <input type="text" placeholder="Email" className="form-control"/>
            </div>
            <div className="input-group mb-3">
                <input type="password" placeholder="Password" className="form-control" />
            </div> 
            <div  className="d-flex justify-content-center">
            <button className="btn btn-outline-success">Sign Up</button>
            </div>
            </div>
            </div>
    );
}
}
class SignUp extends Component {
    render(){
        return(
            <div>
            <Header />
            <Register />
            </div>
        );
    }
}
export default SignUp;