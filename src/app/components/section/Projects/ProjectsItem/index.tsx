import OverView from '../OverView'
import Image from 'next/image'
import styles from './styles.module.css'

type ProjectsItemProps = {
  title: string
  description: string
  imgSrc: string
  reverse?: boolean
}

export default function ProjectsItem({
  title,
  description,
  imgSrc,
  reverse,
}: ProjectsItemProps) {
  return (
    <div className={`${styles.projects} ${reverse && styles.reverse}`}>
      <OverView title={title} description={description} />
      <Image
        className={styles.image}
        src={imgSrc}
        alt={title}
        width={500}
        height={530}
      />
    </div>
  )
}
