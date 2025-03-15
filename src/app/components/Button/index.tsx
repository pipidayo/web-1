import styles from './styles.module.css'
import { ReactNode } from 'react'
import Link from 'next/link'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  target?: string
  outLine?: boolean
}

const Button = ({ children, onClick, href, type, outLine }: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.button} ${outLine && styles.outLine}`}
        target={'_blank'}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
