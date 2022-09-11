import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

function Navbar({ theme, toggleTheme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <nav className={styles.navbar}>
         <div className={styles.logo}><a href="#">🙏Welcome!</a></div>
         <div className={styles.navList}>
            <div><a href="#">Home</a></div>
            <div><a href="#about">About</a></div>
            <div><a href="#skills">Skills</a></div>
            <div><a href="#project">Projects</a></div>
            <div><a href="#contact">Contact</a></div>
         </div>
         <div className={styles.modeBtn}>
            <button onClick={toggleTheme}>
               {theme ?
                  <RiMoonClearFill />
                  : <RiSunFill />
               }
            </button>
         </div>
      </nav>
   );
}

export default Navbar;