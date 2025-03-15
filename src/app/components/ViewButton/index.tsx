import { ReactNode } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

type ViewProps = {
  children: ReactNode
  href: string
}

const ViewButton = ({ children, href }: ViewProps) => {
  return (
    <Link href={href} className={styles.view}>
      {children}
    </Link>
  )
}

export default ViewButton
