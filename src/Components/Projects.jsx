import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import { MdOutlineWeb } from 'react-icons/md';
import animoto from '../assets/project-img/animoto.png';
import { FaCss3, FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { SiNetlify, SiReactrouter } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';


function Projects({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div id='projects' className={styles.projects}>
         <div data-aos='slide-up'>
            <h1>Pr<span>o</span>j<span>e</span>cts</h1>
            <MdOutlineWeb className={styles.projectIcon} />
         </div>
         <div>
            <div data-aos='slide-up' className={styles.projectCard}>
               <div>
                  <img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/project-img/animoto.png" alt="animoto" />
               </div>
               <div>
                  <h1>Inspired by Animoto.com</h1>
                  <p>
                     It's an individual project. This project is a frontend clone of Animoto,
                     which is a cloud-based video creation services.
                     Users can Sign up, login, logout, surfing the attractive landing page in this project.
                     It is built using React, CSS and React Router only.
                  </p>
                  <div>
                     <FaCss3Alt className={styles.pia} />
                     <RiReactjsLine className={styles.pia} />
                     <SiReactrouter className={styles.pia} />
                  </div>
                  <div>
                     <a href="https://clone-animoto.netlify.app/" target="_blank">
                        <SiNetlify className={styles.paa} /> Go to live
                     </a>
                     <a href="https://github.com/iammostak/innate-earth-4569" target="_blank">
                        <FaGithub className={styles.paa} /> View code
                     </a>
                  </div>
               </div>
            </div>
            <div data-aos='slide-up' className={styles.projectCard}>
               <div>
                  <h1>Inspired by HeadphoneZone.in</h1>
                  <p>
                     This project is a clone of the India's finest online store for the world's best headphones.
                     Users can log in or sign up, explore products, checkout and can do much more in this project.
                     It is built using pure HTML, CSS & JavaScript only.
                  </p>
                  <div>
                     <FaHtml5 className={styles.pib} />
                     <FaCss3Alt className={styles.pib} />
                     <IoLogoJavascript className={styles.pib} />
                  </div>
                  <div>
                     <a href="https://clone-headphonezone.netlify.app/" target="_blank">
                        <SiNetlify className={styles.paa} /> Go to live
                     </a>
                     <a href="https://github.com/iammostak/headphonezone.in" target="_blank">
                        <FaGithub className={styles.paa} /> View code
                     </a>
                  </div>
               </div>
               <div>
                  <img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/project-img/headphonezone.png" alt="headphonezone" />
               </div>
            </div>
            <div data-aos='slide-up' className={styles.projectCard}>
               <div>
                  <img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/project-img/lyst.png" alt="lyst" />
               </div>
               <div>
                  <h1>Inspired by LYST.com</h1>
                  <p>
                     Shop and discover the world’s most stylish brands, curated for you.
                     With more than 17,000 brands and stores in one place,
                     Lyst is the definitive fashion destination.
                  </p>
                  <div>
                     <FaHtml5 className={styles.pib} />
                     <FaCss3Alt className={styles.pib} />
                     <IoLogoJavascript className={styles.pib} />
                  </div>
                  <div>
                     <a href="https://clone-lyst.netlify.app/" target="_blank">
                        <SiNetlify className={styles.paa} /> Go to live
                     </a>
                     <a href="https://github.com/iammostak/lyst" target="_blank">
                        <FaGithub className={styles.paa} /> View code
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Projects;