import styles from './styles.module.css'
import Button from '../../Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.job}>UI/UX Designer</div>
      <h1>Hello, my name is Jake</h1>
      <p>
        Short text with details about you, what you do or your professional
        career. You can add more information on the about page.
      </p>
      <div className={styles.buttonContainer}>
        <Button href='#projects'>Projects</Button>
        <Button href='https://twitter.com' target='_blank' outLine>
          Twitter
        </Button>
      </div>
      <div>
        <Image
          src='/images/jake.png'
          alt='My image'
          width={720}
          height={630}
          className={styles.image}
        />
      </div>
    </div>
  )
}
