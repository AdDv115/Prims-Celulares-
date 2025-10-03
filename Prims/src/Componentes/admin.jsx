import './css/perfil.css'

export default function Admin({
    users,
    editaruser,
    setEditaruser,
    iniciarEditar,
    cancelarEditar,
    guardarEditar,
    Eliminar,
    CerrarSesion
}){

    return(

        <div id="Contenedorp">
            
            <h1 className='titulo'>Panel de Administración</h1>

            <table className="Tabla">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {users.length === 0 ? (
                        <tr key="no-users-row">
                            <td colSpan="6" className="no-users-message">No hay usuarios</td>
                        </tr>
                    ) : (
                    
                        users.map(u => (
                            <tr key={u.ID_User}>
                                <td data-label="ID">{u.ID_User}</td>
                                <td data-label="Nombre">{u.Nombre}</td>
                                <td data-label="Correo">{u.Correo}</td>
                                <td data-label="Teléfono">{u.Telefono}</td>
                                <td data-label="Rol">{u.Rol}</td>
                                <td data-label="Acciones">
                                    <div className="acciones">
                                        <button onClick={() => iniciarEditar(u)}>Editar</button>
                                        <button onClick={() => Eliminar(u.ID_User)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {editaruser && (
                <div className="editar">
                    <h3 className='titulo'>Editar usuario (ID: {editaruser.ID_User})</h3>

                    <label>Nombre</label>
                    <input type="text" value={editaruser.Nombre} onChange={(e) => setEditaruser({...editaruser, Nombre: e.target.value})} />

                    <label>Correo</label>
                    <input type="email" value={editaruser.Correo} onChange={(e) => setEditaruser({...editaruser, Correo: e.target.value})} />

                    <label>Teléfono</label>
                    <input type="text" value={editaruser.Telefono} onChange={(e) => setEditaruser({...editaruser, Telefono: e.target.value})} />

                    <label>Rol</label>
                    <select value={editaruser.Rol} onChange={(e) => setEditaruser({...editaruser, Rol: e.target.value})}>
                        <option value="usuario">usuario</option>
                        <option value="admin">admin</option>
                    </select>

                    <button onClick={guardarEditar}>Guardar</button>
                    <button onClick={cancelarEditar}>Cancelar</button>
                </div>
            )}

            <div className="cerrar">
                <button onClick={CerrarSesion}>Cerrar sesión</button>
            </div>
        </div>
    )
}