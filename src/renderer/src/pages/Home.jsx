// import { Link, useNavigate } from "react-router-dom"
// import { useState } from "react";
// import Swal from "sweetalert2";
import LoginForm from "../components/LoginForm";

function Home() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
        console.log('Usuário está logado:', sessionStorage.getItem('username'));
    }


    return (
        <>
            <LoginForm />
        </>
    );
}

export default Home;