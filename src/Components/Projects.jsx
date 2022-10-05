import light from "../styles/light.module.css";
import dark from "../styles/dark.module.css";
import { MdOutlineWeb } from "react-icons/md";
import { FaCss3Alt, FaGithub, FaHtml5 } from "react-icons/fa";
import {
   SiChakraui,
   SiExpress,
   SiMongodb,
   SiNetlify,
   SiReactrouter,
   SiRedux,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
import { VscJson } from "react-icons/vsc";

function Projects({ theme }) {
   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div id="projects" className={styles.projects}>
         <div data-aos="slide-up">
            <h1>
               Project <span>works</span>
            </h1>
            <MdOutlineWeb className={styles.projectIcon} />
         </div>
         <div>
            <div data-aos="slide-up" className={styles.projectCard}>
               <div>
                  <img
                     src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/project-img/everhour.png"
                     alt="everhour"
                  />
               </div>
               <div>
                  <h1>Inspired by Everhour.com</h1>
                  <p>
                     This project is a clone of Everhour, which is a
                     team-oriented time tracking software. Users can Sign up,
                     log in, Add Tasks, track time, add and change User
                     information, and many more. It is built using some
                     front-end and back-end technologies listed below.
                  </p>
                  <div>
                     <SiRedux className={styles.pic} />
                     <RiReactjsLine className={styles.pic} />
                     <IoLogoNodejs className={styles.pic} />
                     <SiExpress className={styles.pic} />
                     <SiMongodb className={styles.pic} />
                     <SiChakraui className={styles.pic} />
                     <SiReactrouter className={styles.pic} />
                  </div>
                  <div>
                     <a
                        href="https://clone-everhour.netlify.app/"
                        target="_blank"
                     >
                        <SiNetlify className={styles.paa} /> Go to live
                     </a>
                     <a
                        href="https://github.com/Madhukesh06/efficacious-talk-3107"
                        target="_blank"
                     >
                        <FaGithub className={styles.paa} /> View code
                     </a>
                  </div>
               </div>
            </div>
            <div data-aos="slide-up" className={styles.projectCard}>
               <div>
                  <h1>Inspired by Animoto.com</h1>
                  <p>
                     It's an individual project. This project is a front-end
                     clone of Animoto, which is a cloud-based video creation
                     service. Users can Sign up, log in, log out, surfing the
                     attractive landing page in this project. It is built using
                     React, CSS, and React Router only.
                  </p>
                  <div>
                     <FaCss3Alt className={styles.pia} />
                     <RiReactjsLine className={styles.pia} />
                     <VscJson className={styles.pia} />
                     <SiReactrouter className={styles.pia} />
                  </div>
                  <div>
                     <a
                        href="https://clone-animoto.netlify.app/"
                        target="_blank"
                     >
                        <SiNetlify className={styles.paa} /> Go to live
                     </a>
                     <a
                        href="https://github.com/iammostak/animoto.com-clone"
                        target="_blank"
                     >
                        <FaGithub className={styles.paa} /> View code
                     </a>
                  </div>
               </div>
               <div>
                  <img
                     src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/project-img/animoto.png"
                     alt="animoto"
                  />
               </div>
            </div>
            <div data-aos="slide-up" className={styles.projectCard}>
               <div>
                  <img
                     src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/project-img/headphonezone.png"
                     alt="headphonezone"
                  />
               </div>
               <div>
                  <h1>Inspired by HeadphoneZone.in</h1>
                  <p>
                     This project is a clone of India's finest online store for
                     the world's best headphones. Users can Sign up, log in,
                     explore products, checkout, and do much more in this
                     project. It is built using pure HTML, CSS & JavaScript
                     only.
                  </p>
                  <div>
                     <FaHtml5 className={styles.pib} />
                     <FaCss3Alt className={styles.pib} />
                     <IoLogoJavascript className={styles.pib} />
                  </div>
                  <div>
                     <a
                        href="https://clone-headphonezone.netlify.app/"
                        target="_blank"
                     >
                        <SiNetlify className={styles.paa} /> Go to live
                     </a>
                     <a
                        href="https://github.com/iammostak/headphonezone.in-clone"
                        target="_blank"
                     >
                        <FaGithub className={styles.paa} /> View code
                     </a>
                  </div>
               </div>
            </div>
            <div data-aos="slide-up" className={styles.projectCard}>
               <div>
                  <h1>Inspired by LYST.com</h1>
                  <p>
                     Lyst is the definitive fashion destination. This project is
                     a clone of the world's finest online clothing and fashion
                     accessories stores. Users can Sign up, log in, explore
                     products, checkout, and can do much more in this project.
                     It is built using pure HTML, CSS & JavaScript only.
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
                     <a
                        href="https://github.com/iammostak/lyst.com-clone"
                        target="_blank"
                     >
                        <FaGithub className={styles.paa} /> View code
                     </a>
                  </div>
               </div>
               <div>
                  <img
                     src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/project-img/lyst.png"
                     alt="lyst"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Projects;
