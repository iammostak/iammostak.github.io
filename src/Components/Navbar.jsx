import light from "../styles/light.module.css";
import dark from "../styles/dark.module.css";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

function Navbar({ theme, toggleTheme }) {
   let styles;
   theme ? (styles = light) : (styles = dark);

   const handleClick = () => {
      toggleTheme();
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
   };

   return (
      <nav className={styles.navbar}>
         <div className={styles.logo}>
            <a href="#">🙏Welcome!</a>
         </div>
         <div className={styles.navList}>
            <div>
               <a href="#">Home</a>
            </div>
            <div>
               <a href="#about">About</a>
            </div>
            <div>
               <a href="#skills">Skills</a>
            </div>
            <div>
               <a href="#projects">Projects</a>
            </div>
            <div>
               <a href="#contact">Contact</a>
            </div>
            <div>
               <a
                  href="https://drive.google.com/file/d/1zjsN5OQ60PyCkqnJG3MfdVEzHq-vG3PZ/view?usp=sharing"
                  target="_blank"
                  download
               >
                  Resume
                  <BiLinkExternal
                     style={{ marginLeft: "4px", marginBottom: "-3px" }}
                  />
               </a>
            </div>
         </div>
         <div className={styles.modeBtn}>
            <button onClick={handleClick}>
               {theme ? <RiMoonClearFill /> : <RiSunFill />}
            </button>
         </div>
      </nav>
   );
}

export default Navbar;
