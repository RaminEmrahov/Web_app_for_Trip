import React from "react";
import Login from "../../../public/Assets/Login_page_img.svg"
import Logo from "../../../public/Assets/Logo.svg"
import style from './SignIn.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BiLogoApple } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from "react-router-dom";


function SignIn() {
    return (
        <div className={style.sign_container}>
            <div className={style.left_section}>
                <img src={Login} alt="" />
            </div>
            <div className={style.right_section}>
                <div className={style.header}>
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                <div className={style.main}>
                    <form action='#' className={style.section_1}>
                        <h4>Sign in for your exciting journey</h4>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input placeholder="someone@example.com" type="text" id="email" />
                        </div>

                        <div className={style.password_container}>
                            <label htmlFor="password">Password</label>
                            <input type="Password" id="password" />
                            <AiOutlineEye className={style.icon_ai} />
                        </div>

                        <Link to="/ForgotPassword">
                            Forgot password?
                        </Link>

                        <input className={style.btn} type="button" value="Sign in" />
                    </form>
                    <div className={style.social}>
                        <p>or use one of this</p>
                        <div className={style.icons}>
                            <FcGoogle className={style.icon} />
                            <BiLogoApple className={style.icon} />
                            <FaFacebook className={`${style.icon} ${style.blue}`} />
                        </div>
                    </div>
                </div>
                <div className={style.footer_content}>
                    <p>
                        Don`t have an account?{" "}
                        <Link to="/TripPlanning">Create one for new adventure!</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn;