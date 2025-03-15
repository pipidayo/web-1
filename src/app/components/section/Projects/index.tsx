import styles from './styles.module.css'
import OverView from './OverView'

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1>
        Projects{' '}
        <div>
          <OverView />
        </div>
      </h1>
    </div>
  )
}
