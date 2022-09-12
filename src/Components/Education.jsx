import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import { GiBookshelf } from 'react-icons/gi';
import InstitutionCard from './common/InstitutionCard';
import { institutions } from '../../server/db.json';


function Education({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);


   return (
      <div className={styles.education}>
         <div data-aos='slide-up'>
            <h1>Educ</h1>
            <h1 className={styles.ao}>a</h1>
            <h1>ti</h1>
            <h1 className={styles.ao}>o</h1>
            <h1>n</h1>
            <GiBookshelf className={styles.booksIcon} />
         </div>
         <div>
            {
               institutions.map((item) => (
                  <InstitutionCard
                     theme={theme}
                     name={item.name}
                     img={item.img}
                     address={item.address}
                     learn={item.learn}
                  />
               ))
            }
         </div>
      </div>
   );
}

export default Education;