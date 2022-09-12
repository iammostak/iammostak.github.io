import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import { FaCodeBranch } from 'react-icons/fa';

function Skills({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div id='skills' className={styles.mySkills}>
         <div data-aos='slide-up'>
            <h1>Ski<span>ll</span>s</h1>
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
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/vercel-ii.png" alt="vercel" /></div>
            <div data-aos='zoom-in' data-aos-duration='1000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/mongoose-ii.png" alt="mongoose" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/router-ii.png" alt="router" /></div>
            <div data-aos='zoom-in' data-aos-duration='3000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/heroku-iii.png" alt="heroku" /></div>
            <div data-aos='zoom-in' data-aos-duration='2000'><img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/logos/postman.png" alt="postman" /></div>
         </div>
      </div>
   );
}

export default Skills;