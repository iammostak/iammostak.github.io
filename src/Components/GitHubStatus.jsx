import light from "../styles/light.module.css";
import dark from "../styles/dark.module.css";
import { FaGithub } from "react-icons/fa";

function GitHubStatus({ theme }) {
   let styles;
   theme ? (styles = light) : (styles = dark);

   return (
      <div className={styles.myStatus}>
         <div data-aos="slide-up">
            <h1>
               Git<span>Hub</span> Stats
            </h1>
            <FaGithub className={styles.myStatusIcon} />
         </div>
         <div>
            <div data-aos="zoom-in">
               {theme ? (
                  <img
                     src="https://github-readme-stats.vercel.app/api?username=iammostak&show_icons=true&title_color=0087ca&icon_color=0087ca&border_radius=10&hide_border=true&text_color=808080&include_all_commits=ture&count_private=true"
                     alt="status"
                  />
               ) : (
                  <img
                     src="https://github-readme-stats.vercel.app/api?username=iammostak&show_icons=true&title_color=f5deb3&icon_color=f5deb3&border_radius=10&bg_color=1f2327&hide_border=true&text_color=808080&include_all_commits=ture&count_private=true"
                     alt="status"
                  />
               )}
            </div>
            <div data-aos="zoom-in">
               {theme ? (
                  <img
                     src="https://github-readme-stats.vercel.app/api/top-langs/?username=iammostak&layout=compact&show_icons=true&title_color=0087ca&icon_color=0087ca&border_radius=10&hide_border=true&text_color=808080"
                     alt="status"
                     height={"80%"}
                  />
               ) : (
                  <img
                     src="https://github-readme-stats.vercel.app/api/top-langs/?username=iammostak&layout=compact&show_icons=true&title_color=f5deb3&icon_color=f5deb3&border_radius=10&bg_color=1f2327&hide_border=true&text_color=808080"
                     alt="status"
                     height={"80%"}
                  />
               )}
            </div>
         </div>
      </div>
   );
}

export default GitHubStatus;
