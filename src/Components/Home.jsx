import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import coder from '../assets/coder.gif';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Home({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div className={styles.home}>
         <div className={styles.homeDetails}>
            <div>
               <h1 data-aos='fade-down'>Hello! Myself</h1>
               <h1 data-aos='fade-left'>Md Mostafijur Rahman</h1>
            </div>
            <div>
               An ambitious self-motivated, confident Full Stack developer with considerable technical skills,
               who possesses self-discipline,
               a growth mindset, and the ability to work with minimal supervision. Able to work under pressure,
               a passionate problem solver with a go-getter attitude.
               A quick learner who can absorb new ideas and can communicate them clearly and effectively.
            </div>
            <div className={styles.homeIcons}>
               <a href="https://github.com/iammostak" target="_blank">
                  <FaGithub />
               </a>
               <a href="https://www.linkedin.com/in/iammostak/" target="_blank">
                  <FaLinkedinIn />
               </a>
               <a href="mailto:mdmostafijur85@gmail.com" target="_blank">
                  <SiGmail />
               </a>
               <a href="https://telegram.me/iammostak" target="_blank">
                  <FaTelegram />
               </a>
            </div>
            <div className={styles.btnDiv}>
               <a href="https://drive.google.com/file/d/1zjsN5OQ60PyCkqnJG3MfdVEzHq-vG3PZ/view?usp=sharing" target="_blank" download>
                  <button className={styles.btn}>
                     Resume
                     <BiLinkExternal className={styles.ri} />
                  </button>
               </a>
            </div>
         </div>
         <div data-aos='zoom-in'>
            <img src={coder} alt="coder" className={styles.homeImg} />
         </div>
      </div>
   );
}

export default Home;