import { useState } from "react"
import Registro from "../Componentes/registro"
import Nav from "../Componentes/nav"

export default function Fregistro(){

    const [Nombre, setNombre] = useState('')
    const [Correo, setCorreo] = useState('')
    const [Telefono, setTelefono] = useState('')
    const [Contra, setContra] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            Nom : Nombre,
            Cor : Correo,
            Tel : Telefono,
            Contra : Contra
        }

        try{
            const res = await fetch('http://localhost:8000/crear', {
                method:'POST',
                headers:{ 'Content-Type':'application/json' },
                body:JSON.stringify(data)
            })

             const resData = await res.json();

            if(res.ok){
                alert(resData.message)

                setNombre('')
                setCorreo('')
                setTelefono('')
                setContra('')
            
            }else{
                alert(resData.message);  
            }
        }
        catch(err){
            console.error(err)
        }
    }

    return(
        <>
        <Nav />
    
        <Registro 
            handleSubmit = {handleSubmit}
            setNombre = {setNombre}
            setCorreo = {setCorreo}
            setTelefono = {setTelefono}
            setContra = {setContra}
            nombre={Nombre}
            correo={Correo}
            telefono={Telefono}
            contra={Contra}
        />
        </>
    )
}