import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from "./Componentes/inicio"
import Fregistro from './Pages/Fregistro'
import Flogin from './Pages/Flogin'
import Fadmin from './Pages/Fadmin'
import Perfil from './Componentes/perfil'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path = "/" element = {<Inicio />}/>
      <Route exact path = "/login" element = {<Flogin />} />
      <Route exact path = "/registro" element = {<Fregistro />} />
      <Route exact path = "/admin" element = {<Fadmin />} />
      <Route exact path = '/perfil' element = {<Perfil />} />
    </Routes>
  </BrowserRouter>
)

export default App
