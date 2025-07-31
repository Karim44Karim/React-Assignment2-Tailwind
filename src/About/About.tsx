import styles from './About.module.css'

export default function About() {
  return (
      <div className={`${styles.heroSection} flex flex-col justify-center items-center`}>
        <div className='flex flex-col justify-center items-center'>
          <h2 className={`${styles.heading}`}>about component</h2>
          <div className='flex flex-row items-center pt-2'>
            <span className={styles.rectangle}></span>
            <i className='icon-star-full text-white mx-3'></i>
            <span className={styles.rectangle}></span>
          </div>
          <div className={`text-white grid md:grid-cols-2 gap-3 pt-3 px-9 container ${styles.test}`}>
            <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
  )
}
