import * as React from 'react'
import { useScroll, animated, useSpring, config } from '@react-spring/web'
import styles from './css/styles.module.scss'
import pura80 from './img/pura80.webp'
import Telefonos from './telefonos'

const PAGE_COUNT = 5

export default function App() {
  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
    config: config.slow, 
  }))

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.05) {
        textApi.start({ y: '0%' }) 
      } else {
        textApi.start({ y: '100%' })
      }
    },
  })

  return (
    <div className={styles.body}>
      <div className={styles.animated__layers}>
    
        <animated.div
          className={styles.dot}
          style={{
            clipPath: scrollYProgress.to([0, 1], ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'])
          }}
        >
          
        </animated.div>
      </div>

    
      {Array.from({ length: PAGE_COUNT }).map((_, index) => (
        <div className={styles.full__page} key={index} />
      ))}
    </div>
  )
}