import React from 'react'

type imageCollectionObj = {
  title: string;
  images: imageObj[]
}

type imageObj = {
  alt: string;
  address: string;
}

type CollectionViewerProps = {
  imageCollection: imageCollectionObj
  onClose: () => void;
}

const CollectionViewer = ({imageCollection, onClose}: CollectionViewerProps) => {
  return (
    <div style={{display: 'flex'}}>
      <p>{imageCollection.title}</p>
      <button onClick={onClose}>X</button>
    </div>
  )
}

export default CollectionViewer;