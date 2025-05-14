import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import './LoginForm.css'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    useEffect(() => {
        // const handleFocus = () => {
        const label = document.getElementById('username-label');
        const input = document.getElementById('username');
        const label_pw = document.getElementById('password-label');
        const input_pw = document.getElementById('password');

        input.addEventListener('focus', () => {
            label.style.color = '#bf85e8';
            label.classList.add('glow');
        });
        // remover a cor quando o input perder o foco
        input.addEventListener('blur', () => {
            label.style.color = '#ebebf599';
            label.classList.remove('glow');
        });

        input_pw.addEventListener('focus', () => {
            label_pw.style.color = '#bf85e8';
            label_pw.classList.add('glow');
        });
        // remover a cor quando o input_pw perder o foco
        input_pw.addEventListener('blur', () => {
            label_pw.style.color = '#ebebf599';
            label_pw.classList.remove('glow');
        });

        // }
    });
    const test = () => {
        Swal.fire({
            title: '<h3 style="text-align: center;">😘 Mãezona mais Linda! 😘</h3>',
            position: 'center',
            showConfirmButton: false,
            timer: 1500,
            toast: true,

        });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'plmt' && password === '132407') {
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('username', username);
            Swal.fire({
                title: 'Login Efetuado!',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                toast: true,

            });
            setTimeout(() => {
                navigate('/versions');
            }, 1200);
        }
        else {
            Swal.fire({
                title: 'Credenciais Erradas :(',
                icon: 'error',
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                toast: true,

            });
            setTimeout(() => {
                const input = document.getElementById('username');
                e.target.reset();
                input.focus();
            }, 1500);
        }

    }

    return (
        <>
            <div className="login-container">
                <div className="img-container">
                    <i className="fi fi-rr-perfume"></i>
                    <img className="login-logo" src="src/assets/perfume_test.png" alt="App Logo" />
                    <Link onClick={test}>Boticário</Link>
                </div>
                <form id="login-form" className="login-form" onSubmit={handleSubmit}>
                    <label id="username-label" htmlFor="username">Username</label>
                    <input id="username" onChange={handleChange} onFocus={() => { }} type="text" name="username" />
                    <label id="password-label" htmlFor="password">Password</label>
                    <input id="password" onChange={handleChange} onFocus={() => { }} type="password" name="password" />
                    <button id="login-btn" className="btn" type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default LoginForm;