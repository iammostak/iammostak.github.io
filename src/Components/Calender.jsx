import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import GitHubCalendar from 'react-github-calendar';
import { IoCalendar } from 'react-icons/io5';

function Calender({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div className={styles.calendar}>
         <div data-aos='slide-up'>
            <h1>Contribution <span>Calendar</span></h1>
            <IoCalendar className={styles.calendarIcon} />
         </div>
         <div data-aos='zoom-in'>
            {theme ?
               <GitHubCalendar
                  username="iammostak"
                  blockSize={20}
                  blockMargin={7}
                  style={{ margin: "auto", alignItems: "center", width: "100%" }}
               />
               : <GitHubCalendar
                  username="iammostak"
                  blockSize={20}
                  blockMargin={7}
                  style={{ margin: "auto", alignItems: "center", width: "100%", backgroundColor: '#1f2327', color: 'whitesmoke' }}
               />
            }
         </div>
      </div>
   );
}

export default Calender;