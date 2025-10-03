import './css/formularios.css'
import { Link } from "react-router-dom";

export default function Login({handleSubmit, setCorreo, setContra}){

    return(
        <div id="Contenedor">
            
            <h1>Inicio de Sesion</h1>

            <div>
                <form onSubmit={handleSubmit}>

                    <label>Correo Electronico</label>
                    <input type="email" name="Cor" onChange={(e) => setCorreo(e.target.value)}/>

                    <label>Contraseña</label>
                    <input type="password" name="Contra" onChange={(e) => setContra(e.target.value)}/>

                    <button type="submit">INICIAR SESION</button>
                </form>

                <p className='pad'>
                    ¿No tienes cuenta?{" "}
                    <Link to="/registro" className='botonlink'>Regístrate</Link>
                </p>
            </div>
        </div>
    )
}