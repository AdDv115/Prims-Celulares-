import './css/formularios.css'
import { Link } from "react-router-dom";

export default function Registro({handleSubmit, setNombre, setCorreo, setTelefono, setContra, nombre, correo, telefono, contra}){

    return(
        <div id="Contenedor">
            
            <h1>Formulario de Registro</h1>

            <div>
                <form onSubmit={handleSubmit}>

                    <label>Nombre Completo</label>
                    <input type="text" name="Nom" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                    <label>Correo Electronico</label>
                    <input type="email" name="Cor" value={correo} onChange={(e) => setCorreo(e.target.value)}/>

                    <label>Telefono</label>
                    <input type="number" name="Tel" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>

                    <label>Contraseña</label>
                    <input type="password" name="Contra" value={contra} onChange={(e) => setContra(e.target.value)}/>

                    <button type="submit">REGISTRAR</button>
                </form>

                <p className='pad'>
                    ¿Tienes una cuenta?{" "}
                    <Link to="/login" className='botonlink'>Inicia Sesion</Link>
                </p>
            </div>
        </div>
    )
}