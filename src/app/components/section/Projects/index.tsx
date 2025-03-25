import styles from './styles.module.css'

import ProjectsItem from './ProjectsItem'

export default function Projects() {
  return (
    <section id='projects' className={styles.projects}>
      <h1>Projects</h1>
      <ProjectsItem
        title='Project Name1'
        description=' I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.'
        imgSrc={'/images/flower.png'}
      />
      <ProjectsItem
        reverse
        title='Project Name2'
        description='What was your role, your deliverables, if the project was personal, freelancing.'
        imgSrc={'/images/calendar.png'}
      />
      <ProjectsItem
        title='Project Name3'
        description='You can also add in this description the type of the project, if it was for web, mobile, electron.'
        imgSrc={'/images/note.jpg'}
      />
    </section>
  )
}
