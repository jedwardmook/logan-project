import { useState } from 'react'
import styles from '../styles/imageContainer.module.css'

type imageObj = {
  alt: string;
  address: string;
}

type imageCollectionObj = {
  title: string;
  images: imageObj[]
 
}

type ImageContainerProps = {
  images: imageCollectionObj[];
}

function ImageContainer({images}: ImageContainerProps ) {
  const [imageClicked, setImageClicked] = useState<imageObj | null>(null)

  const handleImageClick = (imageObj: imageObj) => {
    setImageClicked(imageObj)
  }

  console.log(imageClicked)

  return (
    <div className={styles['images-container']}>
      {images.map((imageCollection, index:number) => (
        <div 
          key={index}
          className={styles['image-container']}
        >
          <h2 className={styles['image-title']}>{imageCollection.title}</h2>
          {imageCollection.images.map((imageObj, imgIndex) => (
            <img 
              key={imgIndex}
              alt={imageObj.alt}
              src={imageObj.address}
              className={styles['image']}
              onClick={() => handleImageClick(imageObj)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default ImageContainer