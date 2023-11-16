import React from "react";
import Login from "../../../public/Assets/Login_page_img.svg"
import Logo from "../../../public/Assets/Logo.svg"
import { Link } from "react-router-dom";
import style from './ForgotPassword.module.css'
import { MdArrowBackIosNew } from "react-icons/md";

function ForgotPassword() {
    return (
        <div className={style.sign_container}>
            <div className={style.left_section}>
                <img src={Login} alt="" />
            </div>
            <div className={style.right_section}>
                <div className={style.header}>
                    <Link to='/signIn'>
                        <MdArrowBackIosNew className={style.arrow_icon} />
                    </Link>
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                <div className={style.main}>
                    <form action='#' className={style.section_1}>
                        <h4>Looking to change your password?</h4>
                        <p>Enter your email below and we'll send you instructions on how to reset your password.</p>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input placeholder="someone@example.com" type="text" id="email" />
                        </div>
                        <input className={style.btn} type="button" value="Sign in" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword