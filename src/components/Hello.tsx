import React from 'react'
import styles from '../styles/hello.module.css'

const Hello = () => {
  return (
    <main className={styles['hello-main-container']}>
      <div className={styles['hello-container']}>
        <img 
          src='https://www.logankruidenier.com/uploads/5/4/9/5/54951567/head-2_orig.jpg'
          className={styles['hello-image']}
        />
        <div className={styles['hello-about-container']}>
        <p>
          My name is Logan Kruidenier.  I was born in 1993 in Goleta, California.
        </p> 
        <p>
          I have experience teaching at the college level as well as special needs and high school. 
          I am passionate about teaching art and it is my goal to illuminate the wonders of creativity to students.
          in the case of my personal work: I am most interested in a good story!
          I have explored narratives through a variety of media such as Printmaking, zines, sculptures, animation and drawing.
          Currently I am excited about drawing and painting from life or "plein-air".  Through rendering things from life, we can illuminate the story of our human condition.
          What will we see and do day-to-day?
          How do we pursue our needs? 
          How do we keep a relationship intact?
          What happens when the imaginary world bleeds into the physical?
          How do we spend our time and how is our living environment changing as an outcome of our human presence? 
          ...Recently I have begun to collect these drawings and format them into Risograph books, zines and intaglio prints.  I am currently a member of the Robert Blackburn Printmaking Co-op and run a small plein-air artist collective called "Drawing Homies". 
        </p>
        </div>
      </div>
    </main>
  )
}

export default Hello;