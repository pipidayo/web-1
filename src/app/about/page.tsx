import Button from '../components/Button'
import styles from './styles.module.css'
import Image from 'next/image'
import Contacts from '../components/section/Contacts'
export default function Aboout() {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.container}>
          <h1>About me</h1>
          <p>
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
            neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
            cras sed. Aliquet risus posuere aliquet imperdiet sit.
          </p>

          <Button href='/projects'>Resume</Button>
        </div>
        <div className={styles.image}>
          <Image
            src='/images/jake2.png'
            alt='My image'
            width={524}
            height={524}
          />
        </div>
      </div>
      <Contacts />
    </div>
  )
}
