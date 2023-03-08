import React from 'react'
import styles from './Home.module.css'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {

  const str = "</>"
  return (
    <div id='home' className={styles.parentContainer}>
      <div className={styles.left}>
        <p className={styles.hey}>
          Hello, Welcome!
        </p>
        <p className={styles.name}>
          I am <span style={{color: "magenta"}}><Typewriter typeSpeed={100} deleteSpeed={60} loop={0} words={['Snehil Agrahari','a Full Stack Web Developer']}/></span>
        </p>
      </div>
      <div>
        <h1 className={styles.right}>
           {str}
        </h1>
      </div>
    </div>
  )
}

export default Home