import { useState, useEffect } from "react"
import Nav from "../Componentes/nav"
import Admin from "../Componentes/admin"

export default function Fadmin(){

    const [usuario, setUsuario] = useState([])
    const [editaruser, setEditaruser] = useState(null)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("users"))
        // Aseguramos que el Rol se compare en minúsculas para consistencia
        if (!user || !user.Rol || user.Rol.toLowerCase() !== "admin") {
            window.location.href = "/"
            return
        }
        listarUsuarios()
    }, [])

    async function listarUsuarios(){
        try{
            const res = await fetch("http://localhost:8000/usuarios")
            const data = await res.json()
            if(res.ok){
                setUsuario(data.users || [])
            }else{
                alert(data.message)
            }
        }
        catch(err){
            console.error(err)
            alert("No se pudo conectar con el servidor.")
        }
    }

    function iniciarEditar(user){
        setEditaruser({...user})
    }

    function cancelarEditar(){
        setEditaruser(null)
    }

    async function guardarEditar(){
        if(!editaruser) return
        try{
            const res = await fetch(`http://localhost:8000/usuarios/${editaruser.ID_User}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    Nombre:editaruser.Nombre,
                    Correo:editaruser.Correo,
                    Telefono:editaruser.Telefono,
                    Rol:editaruser.Rol
                })
            })
            const data = await res.json()
            if(res.ok){
                alert(data.message)
                setEditaruser(null)
                listarUsuarios()
            }else{
                alert(data.message)
            }
        }
        catch(err){
            console.error(err)
        }
    }

    async function Eliminar(id){
        if(!confirm("¿Eliminar usuario?")) return
        try{
            const res = await fetch(`http://localhost:8000/usuarios/${id}`,{
                method:"DELETE"
            })
            const data = await res.json()
            if(res.ok){
                alert(data.message)
                listarUsuarios()
            }else{
                alert(data.message)
            }
        }
        catch(err){
            console.error(err)
        }
    }

    function CerrarSesion(){
        localStorage.removeItem("users")
        window.location.href = "/"
    }

    return(
        <>
        <Nav />
        <Admin
            users={usuario}
            editaruser={editaruser}
            setEditaruser={setEditaruser}
            iniciarEditar={iniciarEditar}
            cancelarEditar={cancelarEditar}
            guardarEditar={guardarEditar}
            Eliminar={Eliminar}
            CerrarSesion={CerrarSesion}
        />
        </>
    )
}