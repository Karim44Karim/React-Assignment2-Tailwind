import { useEffect, useState } from "react";
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const [images, setImages] = useState<string[]>([]);
  const [showModal, setshowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  function openModal(imgSrc: string){
    setSelectedImage(imgSrc);
    setshowModal(true);
  }
  function closeModal(){
    setshowModal(false);
    setSelectedImage(null);
  }

  useEffect(() => {
    // Import all .png files in the assets folder eagerly
    const imageModules = import.meta.glob<{ default: string }>('../assets/portfolio/*.png', { eager: true });
    console.log(imageModules);
    // Extract the URLs of the images
    const loadedImages = Object.values(imageModules).map((mod) => mod.default);
    console.log(loadedImages)

    setImages([...loadedImages,...loadedImages]);
    }, []);
  return (
      <div className={`${styles.heroSection} d-flex flex-column justify-content-center align-items-center`}>
        {showModal && selectedImage && (
          <div onClick={closeModal} className={`${styles['overlay']}`}>
            <img onClick={e=>e.stopPropagation()} src={selectedImage} alt='modal-image' width={`600px`}/>
          </div>
        )}
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2 className={`${styles.heading} pt-4 mt-3`}>portfolio component</h2>
          <div className='d-flex flex-row align-items-center pt-2'>
            <span className={styles.rectangle}></span>
            <i className={`${styles['icon-star-full-dark']} icon-star-full mx-3`}></i>
            <span className={styles.rectangle}></span>
          </div>
        </div>
        <div className="container py-3">
          <div className="row g-5">
            {images.map((src, index)=>(
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`${styles['image-parent']} position-relative`}>
                  <img className="w-100 rounded-3" src={src} alt={`img-${index}`}/>
                  <div onClick={()=>openModal(src)} className={`${styles['image-overlay']} rounded-3 position-absolute top-0 left-0 right-0 bottom-0 h-100 w-100 z-1 justify-content-center align-items-center d-flex`}>
                    <i className="icon-plus1"></i>
                  </div>
                </div>
              </div>))}
          </div>
        </div>
      </div>

  )
}
