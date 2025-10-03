const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2/promise')

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = {
    host:'localhost',
    user:'root',
    password:'',
    database:'bdcelulares'
}

//Registro de usuarios
app.post('/crear', async (req, res) =>{
    const {Nom, Tel, Cor, Contra} = req.body

    let conect
    try{
        conect = await mysql.createConnection(db)

        const [existing] = await conect.execute('SELECT * FROM usuarios WHERE Correo = ? LIMIT 1', [Cor])

        if (existing.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'El correo ya está registrado'
            })
        }

        await conect.execute('INSERT INTO usuarios(Nombre, Correo, Telefono, Contra) VALUES (?, ?, ?, ?)', [Nom, Cor, Tel, Contra])
        return res.status(201).json({
            success:true,
            message:'Usuario Creado'
        })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({ success: false, message: 'Error en el Servidor' })
    }
    finally{
        if(conect) await conect.end()
    }
})

//Login para usuarios
app.post('/login', async (req, res) =>{
    const {Cor, Contra} = req.body

    let conect
    try{
        conect = await mysql.createConnection(db)
        const [rows] = await conect.execute('SELECT * FROM usuarios WHERE Correo = ? and Contra = ? LIMIT 1', [Cor, Contra])

        if(rows.length === 0){
            return res.status(401).json({
                success: false,
                message:'Datos incorrectos'
            })
        }

        const user = rows[0]
        return res.status(200).json ({
            success:true,
            message:'Inicio de sesion existoso',
            user:{
                id:user.ID_User,
                Nombre:user.Nombre,
                Correo:user.Correo,
                Telefono: user.Telefono,
                Rol:user.Rol || 'usuario'
            }
        })
    }
    catch(err){
        console.error(err)
        return res.status(500).json({ success: false, message: 'Error en el Servidor' })
    }
    finally{
        if(conect) await conect.end()
    }
})

//Listar usuarios
app.get('/usuarios', async(req, res) =>{
    
    let conect;

    try {
        conect = await mysql.createConnection(db)
        const [rows] = await conect.execute('SELECT * FROM usuarios')
        return res.status(200).json({
            success:true,
            users: rows
        })

    }catch (err){
        console.error(err)
        return res.status(500).json({
            success: false,
            message: 'Error en el Servidor'
        })
    
    }finally{
        if(conect) await conect.end();
    }
})

//Actualizar usuario
app.put('/usuarios/:id', async (req, res) => {
    const id = req.params.id;
    const { Nombre, Correo, Telefono, Contra, Rol } = req.body
    
    let conect;

    try {
        conect = await mysql.createConnection(db)
        
        await conect.execute('UPDATE usuarios SET Nombre = ?, Correo = ?, Telefono = ?, Rol = ? WHERE ID_User = ?', [Nombre, Correo, Telefono, Rol || 'usuario', id])
    
        if (Contra) {
            await conect.execute('UPDATE usuarios SET Contra = ? WHERE ID_User = ?', [Contra, id]);
        }

        return res.status(200).json({ 
            success: true, 
            message: 'Usuario actualizado' 
        });

    }catch(err){
        console.error(err)
        return res.status(500).json({
            success:false,
            message:"Error en el servidor"
        })
    
    }finally{
        if (conect) await conect.end()
    }
})

//Eliminar usuario
app.delete('/usuarios/:id', async (req, res) => {
    const id = req.params.id;
    
    let conect;
    
    try {
        conect = await mysql.createConnection(db);
        
        await conect.execute('DELETE FROM usuarios WHERE ID_User = ?', [id]);
    
        return res.status(200).json({ 
            success: true, 
            message: 'Usuario eliminado' 
        });
 
    } catch (err) {
        console.error(err);
        return res.status(500).json({ 
            success: false, 
            message: 'Error en el servidor' 
        });

    } finally {
    if (conect) await conect.end();
  }
})

app.listen(8000, () => {
    console.log("Servidor Iniciado")
})