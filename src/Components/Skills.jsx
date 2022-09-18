import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import { FaAssistiveListeningSystems, FaBootstrap, FaCodeBranch, FaCss3Alt, FaHtml5, FaNodeJs, FaPython, FaUserCog, FaUserPlus, FaUserShield, FaUserTie } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { MdSpeakerNotes } from 'react-icons/md';
import { RiFolderUserFill, RiOrganizationChart, RiReactjsFill, RiUserReceivedFill, RiUserSettingsFill, RiUserVoiceFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { SiBabel, SiChakraui, SiCypress, SiExpress, SiFigma, SiHeroku, SiJest, SiMongodb, SiNetlify, SiNpm, SiPostman, SiReact, SiReactrouter, SiRedux, SiTypescript, SiVercel, SiVite } from 'react-icons/si';
import { BiGitMerge } from 'react-icons/bi';
import {AiTwotoneThunderbolt} from 'react-icons/ai';


function Skills({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div id='skills' className={styles.mySkills}>
         <div data-aos='slide-up'>
            <h1>Tech <span>Stack</span> & tools</h1>
            <FaCodeBranch className={styles.mySkillsIcon} />
         </div>
         <div className={styles.skillsContainer}>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/html.png" alt="html" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/css.png" alt="css" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/redux.png" alt="redux" /></div>
            <div data-aos='zoom-in' data-aos-duration='3000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/react.png" alt="react" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/js.png" alt="js" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/bootstrap.png" alt="bootstrap" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/npm.png" alt="npm" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/git.png" alt="git" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/mongodb.png" alt="mongodb" /></div>
            <div data-aos='zoom-in' data-aos-duration='3000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/jest.png" alt="jest" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/node.png" alt="node" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/netlify.png" alt="netlify" /></div>
            <div data-aos='zoom-in' data-aos-duration='3000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/chakra-iii.png" alt="chakra" style={{ borderRadius: '50%' }} /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/mongoose-ii.png" alt="mongoose" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/babel.png" alt="babel" style={{ width: '80%', height: 'auto' }} /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/router-ii.png" alt="router" /></div>
            <div data-aos='zoom-in' data-aos-duration='3000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/cypress-ii.png" alt="cypress" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/postman.png" alt="postman" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/python.png" alt="python" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/vercel-ii.png" alt="vercel" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/vite.png" alt="vite" /></div>
            <div data-aos='zoom-in' data-aos-duration='3000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/express-ii.png" alt="express" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/heroku-iii.png" alt="heroku" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/typescript.png" alt="typescript" /></div>
         </div>
         <div data-aos='slide-up'>
            <h1>Ski<span>ll</span>s</h1>
            <GiSkills className={styles.giSkills} />
         </div>
         <div className={styles.softSkills}>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'green'}}>
               Problem-Solving
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' className={styles.black}>
               <RiOrganizationChart />
               DSA
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000'>
               <HiUserGroup />
               Teamwork
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'tomato'}}>
               <FaHtml5 />
               HTML
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000'>
               <RiUserReceivedFill />
               Adaptability
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'green'}}>
               <FaAssistiveListeningSystems />
               Active Listening
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000'>
               Patience
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000'>
               Decision Making
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'green'}}>
               <FaUserTie />
               Interpersonal Skills
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000'>
               <FaUserPlus />
               Hard Working
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' style={{backgroundColor: 'green'}}>
               <RiUserVoiceFill />
               Communication Skills
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'dodgerblue'}}>
               <FaCss3Alt />
               CSS
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000'>
               FrontEnd Development
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' style={{backgroundColor: 'gold'}}>
               <IoLogoJavascript />
               JavaScript
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000'>
               BackEnd Development
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'tomato'}}>
               <SiNpm />
               Npm
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000'>
               Data Structure & Algorithm
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'skyblue'}}>
               <SiReact />
               React
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000'>
               <RiFolderUserFill />
               Organization
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' style={{backgroundColor: 'purple'}}>
               <SiRedux />
               Redux
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000'>
               <FaUserCog />
               Tools Handling
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'green'}}>
               <FaUserShield />
               Positive Mindset
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' className={styles.black}>
               <SiExpress />
               Express
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'limegreen'}}>
               <FaNodeJs />
               NodeJS
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'royalblue'}}>
               <SiTypescript />
               TypeScript
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' style={{backgroundColor: 'limegreen'}}>
               <SiMongodb />
               MongoDB
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'orangered'}}>
               <SiPostman />
               Postman
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' className={styles.black}>
               <BiGitMerge />
               Git
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' style={{backgroundColor: 'dodgerblue'}}>
               <FaPython />
               Python
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'teal'}}>
               <SiNetlify />
               Netlify
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' className={styles.black}>
               <SiCypress />
               Cypress
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' style={{backgroundColor: 'purple'}}>
               <SiHeroku />
               Heroku
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'teal'}}>
               <SiChakraui />
               Chakra UI
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'purple'}}>
               <FaBootstrap />
               Bootstrap
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' className={styles.black}>
               <SiVercel />
               Vercel
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'red'}}>
               <SiJest />
               Jest
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000' style={{backgroundColor: 'gold'}}>
               <SiBabel />
               Babel
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'red'}}>
               Mongoose
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000'>
               Redux thunk
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'tomato'}}>
               <SiReactrouter />
               React Router
            </button>
            <button data-aos='zoom-in' data-aos-duration='3000'>
               Zoom
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000' style={{backgroundColor: 'dodgerblue'}}>
               <SiVite />
               Vite
            </button>
            <button data-aos='zoom-in' data-aos-duration='1000' style={{backgroundColor: 'tomato'}}>
               <SiFigma />
               Figma
            </button>
            <button data-aos='zoom-in' data-aos-duration='2000'>
               <AiTwotoneThunderbolt />
               Thunder Client
            </button>
         </div>
      </div>
   );
}

export default Skills;