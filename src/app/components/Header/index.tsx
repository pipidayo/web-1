import styles from './styles.module.css'
import Link from 'next/link'

export default function Header() {
  const menus = [
    // { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contacts', path: '#contacts' },
  ]

  return (
    <header className={styles.header}>
      <Link href={'/'} className={styles.name}>
        Jake
      </Link>
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
