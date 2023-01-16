import React from 'react'
import styles from './Home.module.css'


const Home = () => {

  const str = "</>"
  return (
    <div id='home' className={styles.parentContainer}>
      <div className={styles.left}>
        <p className={styles.hey}>
          Hey
        </p>
        <p className={styles.name}>
          I am <span className={styles.full}>Snehil Agrahari</span>
        </p>
        <p className={styles.developer}>
          A Full Stack Web Developer
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