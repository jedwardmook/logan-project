import React from 'react';
import styles from '../styles/navbar.module.css';

type NavBarProps = {
  navlinks: string[];
  handleSetCenterColumn: (value: string) => void;
}

function NavBar( {navlinks, handleSetCenterColumn}: NavBarProps) {

  return (
    <nav className={styles['nav']}>
      {navlinks.map((navlink: string, index: number) => {
        return (
          <button 
            key={index} 
            className={styles['nav_button']}
            onClick={() => handleSetCenterColumn(navlink)}
          >
            {navlink}
          </button>
          )
        })
      }
    </nav>
  )
}

export default NavBar