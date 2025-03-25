import Image from 'next/image'
import Link from 'next/link'
import Styles from './styles.module.css'
export default function Fotter() {
  return (
    <div>
      <div className={Styles.icon}>
        <Link href='https://www.instagram.com' target='_blank' passHref>
          <Image
            src='/images/icon.png'
            alt='Instagram'
            width={48}
            height={48}
          />
        </Link>
        <Link href='https://x.com' target='_blank' passHref>
          <Image src='/images/icon2.png' alt='X' width={48} height={48} />
        </Link>
        <Link href='niarapipipi@gmail.com'>
          <Image src='/images/icon3.png' alt='Email' width={48} height={48} />
        </Link>
      </div>
      <p className={Styles.copyright}>Jake 2025</p>
      <div>
        <Image
          className={Styles.footer}
          src='/images/footer.png'
          alt='Footer'
          width={1440}
          height={344}
        />
      </div>
    </div>
  )
}
