import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import light from '../styles/light.module.css';
import dark from '../styles/dark.module.css';
import { GrContact } from 'react-icons/gr';
import { MdEmail, MdLocationOn, MdPhoneInTalk } from 'react-icons/md';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';


function Contact({ theme }) {

   let styles;
   theme ? (styles = light) : (styles = dark);

   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_4nji952', 'template_mcs87gk', form.current, 'Wxz33JB9kosoNoPRE')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
   };

   return (
      <div id="contact" className={styles.contact}>
         <div data-aos='slide-up'>
            <h1>Get in <span>Touch</span></h1>
            <GrContact className={styles.contactIcon} />
         </div>
         <div className={styles.contactForm}>
            <div>
               <div>
                  <h1>Contact</h1>
                  <p>Will be happy to hear from you</p>
               </div>
               <div>
                  <div>
                     <MdPhoneInTalk className={styles.contactIcons} />
                     <a href="tel:+91.87683.42773">+91 87683 42773</a>
                  </div>
                  <div>
                     <MdEmail className={styles.contactIcons} />
                     <a href="mailto:mdmostafijur85@gmail.com">mdmostafijur85@gmail.com</a>
                  </div>
                  <div>
                     <MdLocationOn className={styles.contactIcons} />
                     <a href="#contact">Malda, West Bengal</a>
                  </div>
               </div>
               <div>
                  <FaLinkedin className={styles.smIcons} />
                  <FaDiscord className={styles.smIcons} />
                  <FaGithub className={styles.smIcons} />
               </div>
            </div>
            <div data-aos='zoom-in'>
               <form ref={form} onSubmit={sendEmail}>
                  <label>Your Name</label>
                  <input type="text" name="user_name" placeholder="😎" />
                  <label>E-mail</label>
                  <input type="email" name="user_email" placeholder="📧" />
                  <label>Message</label>
                  <textarea name="message" placeholder="📝" />
                  <input type="submit" value="Send" />
               </form>
            </div>
         </div>
      </div>
   );
}

export default Contact;