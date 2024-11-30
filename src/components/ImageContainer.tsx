import { useState } from 'react'
import styles from '../styles/imageContainer.module.css'
import Portal from './Portal';
import CollectionViewer from './CollectionViewer';

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

const ImageContainer = ({images}: ImageContainerProps ) => {
  const [collectionClicked, setCollectionClicked] = useState<imageCollectionObj | null>(null);

  const handleImageClick = (imageCollection: imageCollectionObj) => {
    setCollectionClicked(imageCollection)
  }
  
  const handleClose = () => {
    setCollectionClicked(null)
  }

  console.log(collectionClicked)

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
              onClick={() => handleImageClick(imageCollection)}
            />
          ))}
        </div>
      ))}
      {collectionClicked && (
        <Portal>
          <CollectionViewer
            imageCollection={collectionClicked}
            onClose={() => handleClose()}
            />
        </ Portal>
      )}
    </div>
  )
}

export default ImageContainer