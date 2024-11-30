import {useState} from 'react'
import NavBar from './NavBar'
import styles from '../styles/body.module.css'
import ImageContainer from './ImageContainer'
import Hello from './Hello'


const Body = () => {
  const [centerColumn, setCenterColumn] = useState('Hello!')

  const handleSetCenterColumn = (centerColumn: string) => {
    switch (centerColumn) {
      case 'Hello!':
        return <Hello />
      case 'Student Work':
        return <ImageContainer
                  images={images}
                />
    }
  }

  const artCollections = ['Hello!', 'Student Work', 'Books, Objects, Drawings, ETC', 'Resume']

  const images = [
    { title: 'Intro To Printmaking / COLLEGE LEVEL / SAIC 2019',
      images: [
        {alt: 'work of art', address: 'https://www.logankruidenier.com/uploads/5/4/9/5/54951567/img-1840_orig.jpg'}, 
        {alt: 'art work', address: 'https://www.logankruidenier.com/uploads/5/4/9/5/54951567/img-0981_orig.jpg'},
        {alt: 'pen and ink', address: 'https://www.logankruidenier.com/uploads/5/4/9/5/54951567/img-1845_orig.jpg'}
      ]
    },
    { title: 'Visual Arts EXPLORATIONs / special needs & diverse learners / After School Matters, summer 2020 (pictures taken by students)',
      images: [
        {alt: 'drawing', address: 'https://www.logankruidenier.com/uploads/5/4/9/5/54951567/e4_orig.jpg'},
        {alt: 'drawing', address: 'https://www.logankruidenier.com/uploads/5/4/9/5/54951567/img-2692_orig.jpg'},
        {alt: 'drawing', address: 'https://www.logankruidenier.com/uploads/5/4/9/5/54951567/img-2695_orig.jpg'}
      ]
    }
  ];

  return (
    <main 
      className={styles['main-container']}
    >
      <aside style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '90vh', position: 'fixed'}}>
        <NavBar 
          navlinks = {artCollections}
          handleSetCenterColumn = {setCenterColumn}
        />
        <img 
          alt='drawing gif' 
          src='https://media4.giphy.com/media/vpl0yUrDzOm2iAEQ72/giphy.webp?cid=790b7611wyfaeaw3rcuro6kc3r18iti648l0tuynteb1yj5g&ep=v1_gifs_search&rid=giphy.webp&ct=g' 
          style={{ width: '175px' }}
        />
      </aside>
      {handleSetCenterColumn(centerColumn)}
      <div style={{ position: 'fixed', right: 0, height: '90vw', width: '200px'}}>
        <img 
          alt='drawing gif' 
          src='https://media4.giphy.com/media/vpl0yUrDzOm2iAEQ72/giphy.webp?cid=790b7611wyfaeaw3rcuro6kc3r18iti648l0tuynteb1yj5g&ep=v1_gifs_search&rid=giphy.webp&ct=g' 
          style={{ width: '175px'}}/>
      </div>
    </main>
  )
}

export default Body