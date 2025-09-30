import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from "./Componentes/inicio"
import Fregistro from './Pages/Fregistro'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path = "/" element = {<Inicio />}/>
      <Route exact path = "/registro" element = {<Fregistro />} />
    </Routes>
  </BrowserRouter>
)

export default App
