import React from "react";
import Login from "../../../public/Assets/Login_page_img.svg"
import Logo from "../../../public/Assets/Logo.svg"
import './SignIn.css'
import { FcGoogle } from 'react-icons/fc'
import { BiLogoApple } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'


function SignIn() {
    return (
        <div className="sign_container">
            <div className="left_section">
                <img src={Login} alt="" />
            </div>
            <div className="right_section">
                <div className="header">
                    <img src={Logo} alt="" />
                </div>

                <div className="main">
                    <form action='#' className="section-1">
                        <h4>Sign in for your exciting journey</h4>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input placeholder="someone@example.com" type="text" id="email" />
                        </div>

                        <div className="password_container">
                            <label htmlFor="password">Password</label>
                            <input type="Password" id="password" />
                            <AiOutlineEye className="icon_ai" />
                        </div>

                        <a href="">Forgot password?</a>

                        <input className="btn" type="button" value="Sign in" />
                    </form>
                    <div className="social">
                        <p>or use one of this</p>
                        <div className="icons">
                            <FcGoogle className="icon" />
                            <BiLogoApple className="icon" />
                            <FaFacebook className="icon blue" />
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <p>Don’t have an account? <a href="#">Create one for new adventure!</a></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;