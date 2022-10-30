import React from 'react';

import styles from './Speakers.module.css';

export const SpeakerCard = ({ name, desc, image, right, left }) => {
  const content = (
    <div className={styles.content}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );

  const preview = (
    <div className={styles.image}>
      <img className={styles.img} src={image} width={260} alt={name} height={260} />
    </div>
  );

  return (
    <>
      {right && (
        <div className={styles.container_right}>
          {content}
          {preview}
        </div>
      )}
      {left && (
        <div className={styles.container_left}>
          {preview}
          {content}
        </div>
      )}
    </>
  );
};
