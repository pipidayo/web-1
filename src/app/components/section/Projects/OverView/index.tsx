import React from 'react'
import ViewButton from '../../../ViewButton'
import styles from './styles.module.css'

type OverViewProps = {
  title: string
  description: string
}

export default function OverView({ title, description }: OverViewProps) {
  return (
    <div className={styles.project}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ViewButton href=''>View Project</ViewButton>
    </div>
  )
}
