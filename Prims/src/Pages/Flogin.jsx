import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Componentes/nav";
import Login from "../Componentes/login.jsx";

export default function FLogin(){

    const [Correo, setCorreo] = useState('')
    const [Contra, setContra] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault()

        const data = {
            Cor: Correo,
            Contra: Contra
        }

        try {
            const res = await fetch('http://localhost:8000/login', {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(data)
            })

            const resData = await res.json()

            if (res.ok) {

                alert(resData.message)
                
                localStorage.setItem("users", JSON.stringify(resData.user))
                
                if (resData.user.Rol === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/perfil");
                }
            
            }else{
                alert(resData.message)
            }

        }catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        <Nav />
    
        <Login
            handleSubmit = {handleSubmit}
            setCorreo = {setCorreo}
            setContra = {setContra}
        />
        </>
    )
}