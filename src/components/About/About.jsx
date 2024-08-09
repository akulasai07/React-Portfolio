import React from 'react';
import skills from "../../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
        <h2 className={styles.title}>What I do</h2>
        <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

            <ul className={styles.aboutItems}>
                
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                    <p>Developed and deployed backend solutions using microservices architecture, Spring framework, and REST APIs for TELIA clients on Google Cloud with Apigee.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>Delivered robust full-stack solutions, utilizing React.js for dynamic interfaces and Spring for scalable back-end services.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                        <p>Published the "4S Navigation Tool" on Visual Studio Code, enhancing coding efficiency with Go to Definition, Subword Search, and Stack Overflow Search commands.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <div className={styles.aboutItemText}>
                    <p>Recognized for excellence with the Outstanding Academic Achievement Award at George Mason University, backed by industry certifications in AWS, Python, and Java.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

