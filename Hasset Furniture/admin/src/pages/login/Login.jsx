    import React, { useContext, useState } from "react";
    import { login } from "../../context/authContext/apiCalls";
    import { AuthContext } from "../../context/authContext/AuthContext";
    import "./Login.css";

    export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ username, password }, dispatch);
    };

    return (
        <div className="login">
        <form className="loginForm">
            <input
            type="text"
            placeholder="Username"
            className="loginInput"
            onChange={(e) => setUsername(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button
            className="loginButton"
            onClick={handleLogin}
            disabled={isFetching}
            >
            Login
            </button>
        </form>
        </div>
    );
    }