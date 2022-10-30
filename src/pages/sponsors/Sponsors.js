import { Fragment, useEffect, useState } from 'react';

import usesBackgroundPlaceholder from 'assets/images/uses-background-placeholder.jpg';
import usesBackground from 'assets/videos/trailer.mp4';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  HeroBackground,
  HeroContainer,
  HeroHeader,
  ProjectSection,
  HeroSectionContent,
  HeroSectionHeading,
  HeroSectionText,
  HeroTextRow,
} from 'layouts/Hero';
import styles from './Sponsors.module.css';
import { Stats } from 'components/Stats/Stats';
import Sponsor from 'components/Sponsors/Sponsor';
import { media } from 'utils/style';
import { SpeakerCard } from 'components/Sponsors/Speakers';

const STATS = [
  {
    id: 1,
    count: 9,
    name: 'Events',
  },
  {
    id: 2,
    count: 103526,
    name: 'Participants',
  },
  {
    id: 3,
    count: 1248,
    name: 'Submissions',
  },
];

const SPONSORS = [
  {
    name: 'Insyst Labs',
    url: 'https://insystlabs.com/',
    logo: '/sponsors/insyst.jpeg',
  },
  {
    name: 'Lensfit',
    url: 'https://www.lensfit.com/',
    logo: '/sponsors/lensfit.png',
  },
  {
    name: 'Blogadda',
    url: 'https://www.blogadda.com/',
    logo: '/sponsors/blogadda.jpeg',
  },
  {
    name: 'Bugsee',
    url: 'https://www.bugsee.com/',
    logo: '/sponsors/bugsee.png',
  },
  {
    name: 'Ohcampus',
    url: 'https://ohcampus.com/',
    logo: '/sponsors/ohcampus.jpeg',
  },
  {
    name: 'Cloudsploit',
    url: 'https://cloudsploit.com/',
    logo: '/sponsors/cloudsploit.jpeg',
  },
  {
    name: 'Wazirx',
    url: 'https://wazirx.com/',
    logo: '/sponsors/wazirx.png',
  },
];

const SPEAKERS = [
  {
    name: 'Aman Dhattarwal',
    desc: 'He is an Indian youtuber with over 4 million subscribers, an Educator, a Public speaker, a Career counselor and a Tastemaker',
    image: '/speakers/aman.jpeg',
  },
  {
    name: 'Kalpit Veerwal',
    desc: 'Kalpit is a graduate of IIT bombay and is presently the founder and CEO of Acadboost. Kalput incredibly achieved a score of 360/360 in one of the most prestigius exams of India, JEE Mains and is also featured in the Limca book of records',
    image: '/speakers/kalpit.jpeg',
  },
  {
    name: 'Sanjeev Bikchandani',
    desc: 'He is a major investor in the Indian economy, "the Naukri man" is a major shareholder in unicorn companies like Zomato and policybazzar. He draws his wealth from "Info Edge (India) Ltd". The company is an innovator who brought us various services like naukri.com, jeevansathi.com, 99acres.com and shiksha.com',
    image: '/speakers/sanjeev.jpeg',
  },
  {
    name: 'Deepshika Kumar',
    desc: `Deepshikha Kumar is the founder and Managin partner at Speakin - India's first and largest consortium of business experts servicing over 200 ares of expertise. She is the winner of the 2017 Asia Women Icon award for Entrepreneuership`,
    image: '/speakers/deepshika.png',
  },
  {
    name: 'Kaustav Majumdar',
    desc: 'Kaustav Majumdar is an advisor at the Bengal chamber of commerce and IIM Calcutta innocation park. He is an inversor, incubator, and mentor to scores of startups across the country and  abroad. Kaustav also is a guest faculty in leadinf business and technology institutions and has a unique way of blending real world experiences with learing from experts with fun and adventure',
    image: '/speakers/kaustav.jpeg',
  },
];

export const Sponsors = () => {
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
      <Meta title="Stats" description="previous year stats" />
      <HeroContainer className={styles.uses}>
        <HeroBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <HeroHeader title="Previous Stats" description="" />
        <Stats data={STATS} />
        <ProjectSection padding="none" className={styles.section}>
          <HeroSectionHeading>Table of Content</HeroSectionHeading>
          <HeroSectionContent>
            <HeroTextRow stretch width="m">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Event</TableHeadCell>
                    <TableCell>Reach</TableCell>
                    {device == 'laptop' && <TableCell>Registrstions</TableCell>}
                    <TableCell>Submmissions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Ad Mad</TableHeadCell>
                    <TableCell>16,148</TableCell>
                    {device == 'laptop' && <TableCell>65</TableCell>}
                    <TableCell>13</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Bizz Quiz</TableHeadCell>
                    <TableCell>21,597</TableCell>
                    {device == 'laptop' && <TableCell>594</TableCell>}
                    <TableCell>259</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Valo Night</TableHeadCell>
                    <TableCell>6,560</TableCell>
                    {device == 'laptop' && <TableCell>0</TableCell>}
                    <TableCell>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Find X</TableHeadCell>
                    <TableCell>16,000</TableCell>
                    {device == 'laptop' && <TableCell>670</TableCell>}
                    <TableCell>670</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Tagline</TableHeadCell>
                    <TableCell>11,245</TableCell>
                    {device == 'laptop' && <TableCell>261</TableCell>}
                    <TableCell>48</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>CraZ Idea</TableHeadCell>
                    <TableCell>600</TableCell>
                    {device == 'laptop' && <TableCell>15</TableCell>}
                    <TableCell>15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Million Dollar Idea</TableHeadCell>
                    <TableCell>18,506</TableCell>
                    {device == 'laptop' && <TableCell>187</TableCell>}
                    <TableCell>64</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>BGMI</TableHeadCell>
                    <TableCell>600</TableCell>
                    {device == 'laptop' && <TableCell>31</TableCell>}
                    <TableCell>31</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Crypto Crunch</TableHeadCell>
                    <TableCell>12,270</TableCell>
                    {device == 'laptop' && <TableCell>148</TableCell>}
                    <TableCell>148</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Total</TableHeadCell>
                    <TableCell>1,03,526</TableCell>
                    {device == 'laptop' && <TableCell>1,971</TableCell>}
                    <TableCell>1,248</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </HeroTextRow>
          </HeroSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <HeroSectionContent>
            <HeroTextRow width="m">
              <HeroSectionHeading>Key Points : </HeroSectionHeading>
              <HeroSectionText as="div">
                <List>
                  <ListItem>
                    Enspire was able to bring some big names like{' '}
                    <Link href="https://www.linkedin.com/in/dhattarwalaman/">
                      Aman Dhattarwal
                    </Link>
                    ,{' '}
                    <Link href="https://www.linkedin.com/in/kalpitveerwal/">
                      Kalpit Veerwal
                    </Link>
                    ,{' '}
                    <Link href="https://www.linkedin.com/in/sanjeev-bikhchandani-501261/">
                      Sanjeev Bikchandani
                    </Link>
                    ,{' '}
                    <Link href="https://www.linkedin.com/in/deepshikha">
                      Deepshika Kumar
                    </Link>
                    ,{' '}
                    <Link href="https://www.linkedin.com/in/kaustavmajumdar">
                      Kaustav Majumdar
                    </Link>
                  </ListItem>
                  <ListItem>
                    Enspire had a reach of 1,03,526 students from all across the globe and
                    1248 submissions were made as a part of 9 events hosted
                  </ListItem>
                </List>
              </HeroSectionText>
            </HeroTextRow>
          </HeroSectionContent>
        </ProjectSection>
        <HeroHeader title="Previous Sponsors" description="" />
        <Sponsor data={SPONSORS} />
        <ProjectSection padding="none" className={styles.section}>
          <HeroSectionContent>
            <HeroTextRow width="m">
              <HeroSectionHeading>Key Points</HeroSectionHeading>
              <HeroSectionText as="div">
                <List>
                  <ListItem>
                    Short Heading <br />
                    <Link href="#">Something</Link> Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. In error saepe magnam. Inventore eius consequatur
                    cum quae nobis voluptatum natus sequi at, tempore placeat accusamus
                  </ListItem>
                </List>
              </HeroSectionText>
            </HeroTextRow>
          </HeroSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <HeroHeader title="Previous Speakers" description="" />
          <HeroSectionContent>
            {SPEAKERS.map((speaker, index) => (
              <SpeakerCard
                right={index % 2 != 0}
                left={index % 2 == 0}
                key={index}
                name={speaker.name}
                desc={speaker.desc}
                image={speaker.image}
              />
            ))}
          </HeroSectionContent>
        </ProjectSection>
      </HeroContainer>
      <Footer />
    </Fragment>
  );
};
