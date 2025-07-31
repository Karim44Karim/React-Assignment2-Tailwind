import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={`text-white ${styles['footer-bg']}`}>
      <div className='container'>
        <div className='row py-5'>
          <div className='text-center py-5 px-4 col-sm-4'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p className='pt-3'>Clark, MO 65243</p>
          </div>
          <div className='text-center py-5 px-4 col-sm-4'>
            <h3>AROUND THE WEB</h3>
            <ul className='pt-2 d-flex flex-row flex-wrap justify-content-center'>
              <li className='px-1 py-2'><a href="#"><i className="fs-5 p-2 border border-white rounded-5 icon-facebook"></i></a></li>
              <li className='px-1 py-2'><a href="#"><i className="fs-5 p-2 border border-white rounded-5 icon-twitter"></i></a></li>
              <li className='px-1 py-2'><a href="#"><i className="fs-5 p-2 border border-white rounded-5 icon-linkedin2"></i></a></li>
              <li className='px-1 py-2'><a href="#"><i className="fs-5 p-2 border border-white rounded-5 icon-network"></i></a></li>
            </ul>
          </div>
          <div className='text-center py-5 px-4 col-sm-4'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className={`text-white ${styles['footer-bg-dark']}`}>
        <p className='text-center p-4'>Copyright © Your Website 2021</p>
      </div>
    </div>
  )
}
