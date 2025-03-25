import ContactFrom from './ContactFrom'
import styles from './styles.module.css'
export default function Contacts() {
  return (
    <div className={styles.contact}>
      <h1>Contacts</h1>
      <ContactFrom />
    </div>
  )
}
