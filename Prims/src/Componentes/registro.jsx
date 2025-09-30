import './css/registro.css'

export default function Registro({handleSubmit, setNombre, setCorreo, setTelefono,setContra}){

    return(
        <div id="Contenedor">
            
            <h1>Formulario de Registro</h1>

            <div>
                <form onSubmit={handleSubmit}>

                    <label>Nombre Completo</label>
                    <input type="text" name="Nom" id="" onChange={(e) => setNombre(e.target.value)} />

                    <label>Correo Electronico</label>
                    <input type="email" name="Cor" id="" onChange={(e) => setCorreo(e.target.value)}/>

                    <label>Telefono</label>
                    <input type="number" name="Tel" id="" onChange={(e) => setTelefono(e.target.value)}/>

                    <label>Contraseña</label>
                    <input type="password" name="Contra" id="" onChange={(e) => setContra(e.target.value)}/>

                    <button type="submit">REGISTRAR</button>
                </form>
            </div>
        </div>
    )
}