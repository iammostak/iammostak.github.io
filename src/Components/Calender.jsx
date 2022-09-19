import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';

function Calender({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div data-aos='zoom-in' className={styles.calender}>
         {
            theme ?
               <img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/contributions-light.png" alt="light" />
               : <img src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/contributions-dark.png" alt="light" />
         }
      </div>
   );
}

export default Calender;