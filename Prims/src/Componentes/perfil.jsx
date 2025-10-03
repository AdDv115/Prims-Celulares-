import './css/perfil.css'

const Perfil = () => {
  const usuario = JSON.parse(localStorage.getItem("users")) || null;

  if (!usuario) {
    return (
      <div className="contPerfil">
        <div className="user">
          <div className="descripcion">
            <h2>Error de Sesión</h2>
            <p>No se encontraron datos de usuario. Por favor, inicie sesión.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contPerfil">
      <div className="user">
        <div className="descripcionp">
          <h2>{usuario.Nombre || "Nombre no disponible"}</h2>
          <p><strong>Correo:</strong> {usuario.Correo || "-"}</p>
          <p><strong>Teléfono:</strong> {usuario.Telefono || "-"}</p>
        </div>
      </div>
    </div>
  )
}

export default Perfil