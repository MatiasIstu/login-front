import React, { Component } from 'react'
import axios from 'axios';

import '../App.css'
export default class login extends Component {

    state={
        password: '',
        username:'',
        confirmpassword: '',
        signinpassword: '',
        signinusername: ''
    }

    signup = async e =>{
        console.log("arre")
        if(this.state.password !== this.state.confirmpassword){
            console.log("Las contraseñas no son iguales")
            return;
        }
        e.preventDefault();
         const res = await axios.post(`http://localhost:3000/register`,{
            username:this.state.username,
            password: this.state.password
        })
        if(res.data === 'Todo correcto'){
            console.log("usuario registrado correctamente")
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    onChangeConfirmPassword = (e) =>{
        this.setState({
            confirmpassword: e.target.value
        })
    }
    onChangeUsernameSignIn = (e) =>{
        this.setState({
            signinusername: e.target.value
        })
    }
    onChangePasswordSignIn = (e) =>{
        this.setState({
            signinpassword: e.target.value
        })
    }
    signin = async (e) =>{
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/auth`,{
           username:this.state.username,
           password: this.state.password
       })
       if(res.data === "Todo OK!"){
           console.log("Logeado correctamente")
       }
    }

  render() {
    return (
        <div className="login-wrap">
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
            <div className="login-form">
                <div className="sign-in-htm">
                    <div className="group">
                        <label htmlFor="user" className="label">Username</label>
                        <input id="user" type="text" className="input" onChange={this.onChangeUsernameSignIn}/>
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password" onChange={this.onChangePasswordSignIn}/>
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" defaultChecked/>
                        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Sign In" onClick={this.signin}/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                </div>
                <div className="sign-up-htm">
                    <div className="group">
                        <label htmlFor="user" className="label">Username</label>
                        <input id="user" type="text" className="input" value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Password</label>
                        <input id="pass" type="password" className="input" data-type="password" value={this.state.password} onChange={this.onChangePassword}/>
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label">Repeat Password</label>
                        <input id="pass" type="password" className="input" data-type="password" value={this.state.confirmpassword} onChange={this.onChangeConfirmPassword}/>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Sign Up" onClick={this.signup}/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <label htmlFor="tab-1">Already Member?</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
