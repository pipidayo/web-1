import Button from '../../Button'
import styles from './styles.module.css'
import Image from 'next/image'
export default function Aboout() {
  return (
    <div>
      <div>
        <h1>Hello, my name is Jake</h1>
        <p>
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>

        <Button href='/projects'>Projects</Button>
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
