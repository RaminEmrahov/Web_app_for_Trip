import React from "react";
import Login from "../../../public/Assets/Login_page_img.svg"
import Logo from "../../../public/Assets/Logo.svg"
import { FcGoogle } from 'react-icons/fc'
import { BiLogoApple } from 'react-icons/bi'
import { FaFacebook } from 'react-icons/fa'
import { Link } from "react-router-dom";
import style from "./TripPlanning.module.css"
import { MdArrowBackIosNew } from "react-icons/md";

function TripPlanning() {
    return (
        <div className={style.sign_container}>
            <div className={style.left_section}>
                <img src={Login} alt="" />
            </div>
            <div className={style.right_section}>
                <div className={style.header}>
                    <Link to='/signIn'><MdArrowBackIosNew className={style.arrow_icon} /></Link>

                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                <div className={style.main}>
                    <form action='#' className={style.section_1}>
                        <h4>Create an account to start trip planning</h4>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input placeholder="someone@example.com" type="text" id="email" />
                        </div>
                        <input className={style.btn} type="button" value="Start trip planning" />
                    </form>
                    <div className={style.social}>
                        <p>Sign up with</p>
                        <div className={style.icons}>
                            <FcGoogle className={style.icon} />
                            <BiLogoApple className={style.icon} />
                            <FaFacebook className={`${style.icon} ${style.blue}`} />
                        </div>
                    </div>
                </div>
                <div className={style.footer_content}>
                    <p>
                        By creating an account, you agree to elsewhere's <span> Terms of Use </span> and <span> Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TripPlanning