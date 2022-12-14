import React from 'react'
import {useNavigate} from 'react-router-dom';

export const LoginScreen = () => {
    const history = useNavigate()
    const handleClick = () =>{
        history('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Ingresar
            </button>

        </div>
    )
}
