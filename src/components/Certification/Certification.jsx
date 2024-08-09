import React from 'react';
import certifications from '../../../data/certification.json'; // Make sure to create this JSON file
import { getImageUrl } from '../../utils';
import styles from './Certification.module.css';

export const Certification = () => {
  return (
    <section className={styles.certificationContainer} id="certification">
      <h2 className={styles.certificationTitle}>Certifications</h2>
      <div className={styles.certificationGrid}>
        {certifications.map((certification, id) => (
          <div key={id} className={styles.certificationCard}>
            <div className={styles.certificationCardInner}>
              <div className={styles.certificationCardFront}>
                <img
                  src={getImageUrl(certification.imageSrc)}
                  alt={`${certification.name} Logo`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
                />
              </div>
              <div className={styles.certificationCardBack}>
                <h3>{certification.name}</h3>
                <p><em>Certified by: {certification.organization}</em></p>
                <p>Date Received: {certification.dateReceived}</p>
                <p>{certification.description}</p>
                <a href={certification.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};