import { Fragment, useEffect, useState } from 'react';
import usesBackgroundPlaceholder from 'assets/images/uses-background-placeholder.jpg';
import usesBackground from 'assets/videos/trailer.mp4';
import { Meta } from 'components/Meta';
import { DecoderText } from 'components/DecoderText';
import { media } from 'utils/style';

import { HeroBackground, HeroContainer, ProjectSection } from 'layouts/Hero';
import styles from './Gallery.module.css';

export const Gallery = () => {
  const [device, setDevice] = useState('laptop');

  useEffect(() => {
    const manageDevice = () => {
      if (window.innerWidth < media.mobile) {
        setDevice(() => 'mobile');
      } else {
        setDevice(() => 'laptop');
      }
    };

    manageDevice();
    if (window) {
      window.addEventListener('resize', manageDevice);
    }

    return () => {
      window.removeEventListener('resize', manageDevice);
    };
  }, [device]);

  const images = [
    {
      pos: 1,
      pic: 'https://ik.imagekit.io/cmef8hxb6/WhatsApp_Image_2021-06-29_at_8.39.18_AM__1__8ABH7QXQE.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1668240172704',
    },
    {
      pos: 2,
      pic: 'https://ik.imagekit.io/cmef8hxb6/WhatsApp_Image_2021-06-29_at_4.02.58_PM__2__oRo3SgTFa.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1668239678039',
    },
    {
      pic: 'https://ik.imagekit.io/cmef8hxb6/2_IqmLHFMAz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668244363105',
      pos: 3,
    },
    {
      pos: 4,
      pic: 'https://ik.imagekit.io/cmef8hxb6/Screenshot_20221112_172437_YqrH-KfhD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668254123325',
    },
    {
      pos: 5,
      pic: 'https://ik.imagekit.io/cmef8hxb6/WhatsApp_Image_2021-06-29_at_1.30.00_PM_qBhwFioEy.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1668239622195',
    },
    {
      pos: 6,
      pic: 'https://ik.imagekit.io/cmef8hxb6/3_y7i4d9SAU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668244611946',
    },
    {
      pos: 7,
      pic: 'https://ik.imagekit.io/cmef8hxb6/Screenshot__633__GnYtx6M-p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668239450175',
    },
    {
      pos:8,
      pic:'https://ik.imagekit.io/cmef8hxb6/WhatsApp_Image_2021-06-26_at_20.08.40_iS509Uw4X.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1668252350160'
    },
    {
      pos:9,
      pic:'https://ik.imagekit.io/cmef8hxb6/E-Cell-IIIT-Lucknow-YouTube_1__CCn61C2CE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668252564923'
    },
    {
      pos:10,
      pic:'https://ik.imagekit.io/cmef8hxb6/WhatsApp_Image_2021-06-29_at_4.02.58_PM_e7TFLmEtQb.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1668252751830'
    },
    {
      pos:11,
      pic:'https://ik.imagekit.io/cmef8hxb6/Bizz_1_JEsbL6ygc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668253570411'
    }
    ,{
      pos:12,
      pic:'https://ik.imagekit.io/cmef8hxb6/Screenshot_20221112_172437_YqrH-KfhD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668254123325'
    }
  ];

  return (
    <Fragment>
      <Meta title="Gallery" description="Last year" />
      <HeroContainer className={styles.uses}>
        <HeroBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <h1 className={styles.headdown}>
          <DecoderText text="Gallery " />
        </h1>
        <ProjectSection padding="none" className={styles.section}>
          <div className={styles.container}>
           {
            images.map((items)=>{
              return(
                <img src={items.pic} key={items.pos} alt=""  className={styles.img}/>
              );
            })
           }
          </div>
        </ProjectSection>
      </HeroContainer>
    </Fragment>
  );
};
