import React from 'react'
import styles from './styles.module.css'
import { ReactNode } from 'react'

export default function Button() {
  type ButtonProps = {
    children: ReactNode
    onClick?: () => void
    href?: string
    type?: 'button' | 'submit'
  }
  const Button = ({ children, onClick, href, type }: ButtonProps) => {
    if (href) {
      return (
        <a href={href} className='button-link'>
          {children}
        </a>
      )
    }

    return (
      <button className={styles.button} type={type} onClick={onClick}>
        {children}
      </button>
    )
  }
}
