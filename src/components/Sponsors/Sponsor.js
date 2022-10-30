import { Text } from 'components/Text';
import Link from 'next/link';
import React from 'react';

import styles from './Sponsor.module.css';

const Sponsor = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((sponsor, index) => (
        <Link href={sponsor.url} key={sponsor.id || index} className={styles.link}>
          <div className={styles.card}>
            <img src={sponsor.logo} alt={sponsor.name} width={'120px'} height={'120px'} />
            <Text className={styles.text}>{sponsor.name || ''}</Text>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sponsor;
