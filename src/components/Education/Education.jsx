import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
           
                <img className={styles.EducationImg} src={getImageUrl("education/gmu.png")} alt="Gmu logo" />
           
            <div className={styles.contentItem}>
                <h1><strong>George Mason University</strong></h1>
                <p><em>Master's in Computer Science     (August 2022 - May 2024)</em></p>
                <p>CGPA : 3.83/4.00</p>
                <p> Outstanding Academic Achievement Award </p>
               
            </div>

        </div>
        <div className={styles.content}>
        
                <img className={styles.EducationImg} src={getImageUrl("education/snist.png")} alt="Snist logo" />
            
            <div className={styles.contentItem}>
                <h1><strong>Sreenidhi Institute of Science and Technology</strong></h1>
                <p><em>Bachelor's in Computer Science       (August 2017 - June 2021)</em></p>
                <p>CGPA : 3.9/4.00</p>
                
            </div>

        </div>
    </section>
  )
}
