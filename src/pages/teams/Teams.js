import { Fragment, useEffect, useState } from 'react';
import { Heading } from 'components/Heading';
import usesBackgroundPlaceholder from 'assets/images/uses-background-placeholder.jpg';
import usesBackground from 'assets/videos/trailer.mp4';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { DecoderText } from 'components/DecoderText';

import { Transition } from 'components/Transition';

import {
  HeroBackground,
  HeroContainer,
  HeroHeader,
  ProjectSection,
  HeroSectionHeading,
} from 'layouts/Hero';
import styles from './Teams.module.css';
import { media } from 'utils/style';

export const Teams = () => {
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

  return (
    <Fragment>
      <Meta title="Team" description="Meet our team" />
      <HeroContainer className={styles.uses}>
        <HeroBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <h1 className={styles.headdown}>
          <DecoderText text="Meet  our  team " />
        </h1>
        <ProjectSection padding="none" className={styles.section}>
          <div className={styles.cont}>
            <HeroSectionHeading>FACULTY INCHARGE</HeroSectionHeading>

            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Dr.%20Abhinesh%20Kaushik.png"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Dr. Abhinesh Kaushik</div>
                <div className={styles.details}>Faculty Incharge</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>

          <div className={styles.cont}>
            <HeroSectionHeading>COORDINATORS</HeroSectionHeading>

            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Surbhi%20Singh.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Surbhi Singh </div>
                <div className={styles.details}>Coordinator</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Vivek%20Barnwal.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Vivek Barnwal</div>
                <div className={styles.details}>Coordinator</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>

          <div className={styles.cont}>
            <HeroSectionHeading>HEAD OF CAMPUS AMBASSADOR PROGRAM</HeroSectionHeading>

            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Ankit%20Bajiya.jpeg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Ankit Bajiya</div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <HeroSectionHeading>RELATIONS</HeroSectionHeading>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Akshat%20Agrawal.jpeg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Akshat Agarwal</div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Sai%20Sumith.png"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Sai Sumith </div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Ruthvika%20Kalsani.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Ruthvika Kalsani</div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Rohan%20Agarwal.jpeg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Rohan Agarwal</div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <HeroSectionHeading>DEVELOPERS</HeroSectionHeading>

            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Tejeshwar%20Reddy.jpeg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Tejeshwar Reddy</div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Chinmay%20Dorge.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Chinmay Dorge </div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <HeroSectionHeading>CONTENT TEAM</HeroSectionHeading>

            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Akshay%20Lavate.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Akshay Lavate</div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Gaurav%20Marla.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Gaurav Marla </div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <HeroSectionHeading>DESIGNERS</HeroSectionHeading>

            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Arunim%20Singhal.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Arunim Singhal </div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Khyati%20Singh.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Khyati Singh </div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Ritu%20Kumari%20.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Ritu Kumari </div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <HeroSectionHeading>MEDIA TEAM</HeroSectionHeading>

            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Lakshmi%20Sharvani.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Lakshmi Sharvani</div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Ruthvika%20Kalsani.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Ruthvika Kalsani</div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Rohan%20Agarwal.jpeg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Rohan Agarwal </div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <HeroSectionHeading>EVENTS TEAM</HeroSectionHeading>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Shreya%20Patike.jpeg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Shreya Patike</div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Ayush_Rai.jpeg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Ayush_Rai</div>
                <div className={styles.details}>Head Of Department</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
          <div className={styles.cont}>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Ashutosh.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Ashutosh Rajput</div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.box}>
                <img
                  className={styles.pic}
                  src="https://ecell-iiitl.netlify.app/assets/img/members/Members2022/Arush%20Panwar.jpg"
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <div className={styles.name}>Arush Panwar</div>
                <div className={styles.details}>Senior Member</div>
                <div className={styles.social}></div>
              </div>
            </div>
          </div>
        </ProjectSection>
      </HeroContainer>
      <Footer />
    </Fragment>
  );
};
