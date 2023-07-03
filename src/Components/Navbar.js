import React, { Component } from 'react'
import logo from '../Assets/Hero/Logo.svg'
import './Navbar.css'
class Navbar extends Component{
    state = {clicked: false}
    handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
    return (
        <>
            <nav className="navbar">
                <div className="header">
                    <img src={logo} alt="logo" />
                    <h1>Alpha Team</h1>
                </div>
                <ul className="nav-links">
                    <div id="menu" className={this.state.clicked ? "#menu active" : "#menu"}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Partners</a></li>
                        <li><a href="/">Exchanges</a></li>
                        {/* <li><a href="/">Contact Us</a></li> */}
                    </div>
                </ul>
                <div className="btns">
                    {/* <button className="login">Login</button> */}
                    <button className="sign">Let's Connect</button>
                    <div className="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                </div>
            </nav>
        </>
    )
    }
}
export default Navbar;