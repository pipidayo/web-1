import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {
  const menus = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.name}>Jake</div>
      <nav>
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={menu.path}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
