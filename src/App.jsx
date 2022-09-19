import { useEffect, useState } from 'react';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import GitHubStatus from './Components/GithubStatus';
import Contact from './Components/Contact';
import Calender from './Components/Calender';

function App() {
   const [theme, setTheme] = useState(true);

   AOS.init({ duration: 2000 });

   useEffect(() => {
      theme ?
         (document.querySelector('.App').style.backgroundColor = 'white')
         : (document.querySelector('.App').style.backgroundColor = '#1f2327');
   }, [theme]);

   return (
      <div className="App">
         <Navbar theme={theme} toggleTheme={() => setTheme(!theme)} />
         <Home theme={theme} />
         <About theme={theme} />
         <Skills theme={theme} />
         <Projects theme={theme} />
         <GitHubStatus theme={theme} />
         <Calender theme={theme} />
         <Contact theme={theme} />
      </div>
   );
}

export default App;