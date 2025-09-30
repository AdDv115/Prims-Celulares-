import { useSpring, animated } from '@react-spring/web'
import Pura80 from './img/pura80.webp'
import Pura802 from './img/pura802.webp'
import './css/telefonos.css'

const Telefonos = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 20 },
    delay: 300,
  })

  return (
    <animated.div style={fadeIn} className="contTel">
      
      <img src={Pura80} alt="Pura 80" className="pura80" />

      
      <div className="contDes">
        <img src={Pura802} alt="" className="pura802" />
        <div className="descripcion">
          <h2>Detalle diurno</h2>
          <h2>Matiz nocturno</h2>
          <p>
            Nítido desde el amanecer al anochecer con la Cámara de Ultra Iluminación de 1 pulgada.
            Desvela esplendores ocultos con la Cámara Macro Telefoto de Ultra Iluminación.
            Y la cámara Ultra Chroma aumenta la capacidad de cada lente para entregar una fidelidad del color sorprendente.
          </p>
        </div>
      </div>
    </animated.div>
  )
}

export default Telefonos