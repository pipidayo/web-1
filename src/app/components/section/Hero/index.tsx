import React from 'react'
import styles from './styles.module.css'
import Button from '../../Button'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.job}>UI/UX Designer</div>
      <h1>Hello, my name is Madelyn Torff</h1>
      <p>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </p>
      <Button>Projects</Button>
      <Button>Twitter</Button>
      <div>
        <img src='' alt='' />
      </div>
    </div>
  )
}
