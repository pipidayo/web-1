import React from 'react'
import ViewButton from '../../../ViewButton'
import styles from './styles.module.css'
export default function OverView() {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <h2>Project Name</h2>
        <p>
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <ViewButton href=''>View Project</ViewButton>
      </div>
    </div>
  )
}
