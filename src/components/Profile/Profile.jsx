import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Profile.module.css";
export const Profile = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sai Dharshini Akula</h1>
            <p className={styles.description}>I'm a Full Stack Software Developer with a strong foundation in JavaScript, React,Spring and AWS, I specialize in building high-performance web applications. I am passionate about driving innovation and solving complex technical challenges. Reach out if you would like to know more! </p>
            <div className={styles.buttonContainer}>
              <a className={styles.contactBtn} href="mailto:akulasaidharshini@gmail.com">Contact Me</a>
              <a className={styles.contactBtn} href="../../../assets/nav/Sai_Dharshini_Akula_Resume.pdf" target="_blank" >Download My Resume</a>
            </div>
        </div>
        <img className={styles.ProfileImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" />
        <div className={styles.topBlur}> 
            
        </div>
        <div className={styles.bottomBlur}>
            
        </div>
    </section>
  )
}
