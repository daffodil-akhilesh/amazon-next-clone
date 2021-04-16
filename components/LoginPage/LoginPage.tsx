import { useEffect, useState } from "react";
import classes from "./LoginPage.module.css";
import LoginPostCard from "./LoginPostCard/LoginPostCard";
import Link from "next/link";
import { useRouter } from "next/router";


const LoginPage = ({ type }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("email");
    const router = useRouter();

    const loginHandler = () => {
        if (mode === "email") {
            setMode("pass");
            return;
        }
        // login request
        console.log(email, password);
    }

    const inputHandler = (event) => {
        let value = event.target.value;
        if (mode === "email") setEmail(value);
        else setPassword(value);
    }
    const goBackHandler = () => {
        setMode("email");
    }
    const pushToCreate = () => {
        router.push("/auth/signUp");
    }

    return (
        <div className={classes.LoginPage}>
            <LoginPostCard width={350} height={"80%"} imagePath={"/amazon_black.png"} imgH={40} imgW={"90%"}>
                <div className={classes.LoginPageContent}>
                    <div>
                        <h1>{type === "login" ? "Sign-In" : "Create Account"}</h1>
                    </div>
                    <div>
                        <p>{mode === "email" ? "Email or mobile phone number" : "Enter Password"}</p>
                        <input onChange={inputHandler} type={mode === "email" ? "text" : "password"} value={mode === "email" ? email : password} />
                    </div>
                    <div>
                        <button onClick={loginHandler}>{mode === "email" ? "Continue" : `${type === "login" ? "Log In" : "Create Account"}`}</button>
                    </div>
                    {
                        mode === "pass" && (
                            <div>
                                <button style={{ background: "linear-gradient(to bottom,#f7f8fa,#e7e9ec)", marginTop: "0px" }} onClick={goBackHandler}>Back</button>
                            </div>
                        )
                    }
                    <div>
                        <p style={{ fontWeight: 100, lineHeight: "16px", fontSize: "11px" }}>By continuing, you agree to Amazon's <Link href={"/services/terms"}><a>Conditions of Use</a></Link> and <Link href={"/services/privacy"}><a>Privacy Notice</a></Link>.</p>
                    </div>
                </div>
                {
                    type === "login" && (
                        <div className={classes.CreateAccountButton}>
                            <button onClick={pushToCreate} >Create New Account</button>
                        </div>
                    )
                }
            </LoginPostCard>
            {/* <div className>
                <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
            </div> */}
        </div>
    )
}
export default LoginPage;