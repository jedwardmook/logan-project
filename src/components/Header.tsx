import styles from '../styles/header.module.css';

const colors = ['red', 'green', 'yellow', 'blue', 'green'];

const getRandomFromArray = () => colors[Math.floor(Math.random() * colors.length)];

function Header() {
  const handleMouseOver = (index: number) => {
    const color = getRandomFromArray();
    document.documentElement.style.setProperty(`--text-color-${index}`, color);
  };

  const handleMouseOut = (index: number) => {
    document.documentElement.style.setProperty(`--text-color-${index}`, 'black');
  };

  const nameToMap = 'Logan Kruidenier'.split('')

  return (
    <header className={styles['header-container']}>
      {nameToMap.map((letter, index) => (
        <h1
          key={index}
          className={styles['header-name']}
          style={{ color: `var(--text-color-${index})`}}
          onMouseEnter={() => handleMouseOver(index)}
          onMouseOut={() => handleMouseOut(index)}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </h1>
      ))}
    </header>
  );
}

export default Header;