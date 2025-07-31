import HeroImage from '../../src/assets/avataaars.svg'
import styles from './Home.module.css'
import '../assets/icomoon/style.css'

export default function Home() {
  return (
      <div className={`${styles.heroSection} d-flex flex-column justify-content-center align-items-center`}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img className={`${styles.heroImg}`} src={HeroImage} alt="hero-image" />
          <h2 className={`${styles.heading} pt-4 mt-3 fs-1`}>Start Framework</h2>
          <div className='d-flex flex-row align-items-center pt-2'>
            <span className={styles.rectangle}></span>
            <i className='icon-star-full text-white mx-3'></i>
            <span className={styles.rectangle}></span>
          </div>
          <span className='text-white pt-3'>Graphic Artist - Web Designer - Illustrator</span>
        </div>
      </div>
  )
}
