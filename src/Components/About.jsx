import light from "../styles/light.module.css";
import dark from "../styles/dark.module.css";
import { TypeAnimation } from "react-type-animation";
import Education from "./Education";

function About({ theme }) {
   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div id="about" className={styles.about}>
         <div className={styles.aboutHeader}>
            <h1>About</h1>
            <h1>Me</h1>
         </div>
         <div className={styles.aboutContent}>
            <div>
               <img
                  src="https://raw.githubusercontent.com/iammostak/iammostak.github.io/main/src/assets/profile.png"
                  alt="avatar"
                  className={styles.avatar}
               />
            </div>
            <div>
               <div className={styles.bgi}></div>
               <div data-aos="zoom-in">
                  <img
                     src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                     height="24px"
                     alt="waving hand"
                     style={{ marginBottom: "-4px" }}
                  />{" "}
                  Hi, My name is <span>Md Mostafijur Rahman</span> and I am from{" "}
                  <span>Kaliachak, Malda, West Bengal (India)</span>. I
                  completed my graduation in <span>Bachelor of Pharmacy</span>{" "}
                  from <span>Rajiv Gandhi Proudyogiki Vishwavidyalaya,</span>{" "}
                  Bhopal (MP) in 2021. Then I joined <span>Masai School</span>{" "}
                  (A Military-type coding School), which offers a 30-week
                  full-time course on the{" "}
                  <span>Full Stack Web Development</span>. At Masai School, I
                  get hands-on experience in learning{" "}
                  <span>frontend and backend</span> technologies.
               </div>
               <TypeAnimation
                  sequence={[
                     "> ",
                     2000,
                     "> Coding is hard",
                     500,
                     "> Coding is",
                     500,
                     "> Coding is fun",
                     2000,
                     "> Coding is ",
                     500,
                     "> Coding is love",
                     2000,
                     "> ",
                     1000,
                     "> So ",
                     500,
                     "> So, ",
                     1000,
                     "> So, I became a Coder. ",
                     2000,
                     "> So, ",
                     500,
                     "> ",
                     1000,
                     "> And ",
                     1000,
                     "> And, ",
                     1000,
                     "> And, Coding became my life. ",
                     3000,
                     () => {
                        console.log("Done typing!");
                     },
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  className={styles.typing}
               />
            </div>
         </div>
         <Education theme={theme} />
      </div>
   );
}

export default About;
