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
           <HeroSectionHeading>COORDINATORS</HeroSectionHeading>
 
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/Shurbi_FEs4t7irY?ik-sdk-version=javascript-1.4.3&updatedAt=1668597543255"
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
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/vivek__HdWBzUDs?ik-sdk-version=javascript-1.4.3&updatedAt=1668582448770"
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
           <HeroSectionHeading>RELATIONS</HeroSectionHeading>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/akshat_Mwr5rxK29?ik-sdk-version=javascript-1.4.3&updatedAt=1668584426058"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Akshat Agarwal</div>
               <div className={styles.details}>Relations Head</div>
               <div className={styles.social}></div>
             </div>
           </div>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/rohan_k_qFVl4hp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668595950221"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Rohan Agarwal</div>
               <div className={styles.details}>Member</div>
               <div className={styles.social}></div>
             </div>
           </div>
         </div>
         <div className={styles.cont}>
           <HeroSectionHeading>Event Head</HeroSectionHeading>
 
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/shreya_D7TVTqH9l?ik-sdk-version=javascript-1.4.3&updatedAt=1668583225031"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Shreya Patike </div>
               <div className={styles.details}>Events Head</div>
               <div className={styles.social}></div>
             </div>
           </div>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/Ayush_Rai_GypdbHbFi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668582300342"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Ayush Rai</div>
               <div className={styles.details}>Events Head</div>
               <div className={styles.social}></div>
             </div>
           </div>
          
         </div>
         <div className={styles.cont}>
           <HeroSectionHeading>Event Lead</HeroSectionHeading>
 
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/Arush_00PPTvVgT?ik-sdk-version=javascript-1.4.3&updatedAt=1668583888214"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Arush Panwar</div>
               <div className={styles.details}>Events Lead</div>
               <div className={styles.social}></div>
             </div>
           </div>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/gaurav_DoJq31E62?ik-sdk-version=javascript-1.4.3&updatedAt=1668583762893"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Gaurav Marla </div>
               <div className={styles.details}>Events Lead</div>
               <div className={styles.social}></div>
             </div>
           </div>
          
         </div>
         <div className={styles.cont}>
        
 
         <div className={styles.card}>
           <div className={styles.box}>
             <img
               className={styles.pic}
               src="https://ik.imagekit.io/cmef8hxb6/iamges/rutvika_wCYlDugwn?ik-sdk-version=javascript-1.4.3&updatedAt=1668595492087"
               alt=""
             />
           </div>
           <div className={styles.info}>
             <div className={styles.name}>Ruthvika Kalsani </div>
             <div className={styles.details}>Events Lead</div>
             <div className={styles.social}></div>
           </div>
         </div>
         <div className={styles.card}>
         <div className={styles.box}>
           <img
             className={styles.pic}
             src="https://ik.imagekit.io/cmef8hxb6/iamges/summit_bfG7PEpwH?ik-sdk-version=javascript-1.4.3&updatedAt=1668595243922"
             alt=""
           />
         </div>
         <div className={styles.info}>
           <div className={styles.name}>Sai Sumith </div>
           <div className={styles.details}>Events Lead</div>
           <div className={styles.social}></div>
         </div>
       </div>
        
       </div>
       <div className={styles.cont}>
       <HeroSectionHeading>DEVELOPERS</HeroSectionHeading>
 
       <div className={styles.card}>
         <div className={styles.box}>
           <img
             src="https://ik.imagekit.io/cmef8hxb6/iamges/tejas_kPF3MBIU3?ik-sdk-version=javascript-1.4.3&updatedAt=1668584158005"
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
             src="https://ik.imagekit.io/cmef8hxb6/iamges/chinmay_RMdXhLo6g.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668585691662"
             alt=""
           />
         </div>
         <div className={styles.info}>
           <div className={styles.name}>Chinmay Dorge </div>
           <div className={styles.details}>Head Of Department</div>
           <div className={styles.social}></div>
         </div>
       </div>
     </div>
        
        
         <div className={styles.cont}>
           <HeroSectionHeading>Media  Team</HeroSectionHeading>
 
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/shviani_43PpbxYAfp?ik-sdk-version=javascript-1.4.3&updatedAt=1668597360831 "
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Mohit Prajapat</div>
               <div className={styles.details}>Head Of Department</div>
               <div className={styles.social}></div>
             </div>
           </div>
          
         </div>
         <div className={styles.cont}>
           <HeroSectionHeading>Media Coverage Team</HeroSectionHeading>
 
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/mohit_fBUazLScQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668584739745"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Mohit Prajapat</div>
               <div className={styles.details}>Head Of Department</div>
               <div className={styles.social}></div>
             </div>
           </div>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/ritu_yRqcd2YeZ?ik-sdk-version=javascript-1.4.3&updatedAt=1668582499320"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Ritu Kumari </div>
               <div className={styles.details}>Head Of Department  </div>
               <div className={styles.social}></div>
             </div>
           </div>
         </div>
         <div className={styles.cont}>
           <HeroSectionHeading>DESIGNERS</HeroSectionHeading>
 
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/arunim_WBqNmajhC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668585544549"
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
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/khyati_qRUt5NvtH?ik-sdk-version=javascript-1.4.3&updatedAt=1668582743577"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Khyati Singh </div>
               <div className={styles.details}>Head Of Department</div>
               <div className={styles.social}></div>
             </div>
           </div>
          
         </div>
         <div className={styles.cont}>
           <HeroSectionHeading>Logistics Team</HeroSectionHeading>
 
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/saniya_J6Fb_TG0p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668585189196"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Saniya Maheshwari</div>
               <div className={styles.details}>Head Of Department</div>
               <div className={styles.social}></div>
             </div>
           </div>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/akshayL_r2crmOc1Vp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668585284072"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Akshay Lavate</div>
               <div className={styles.details}>Head Of Department</div>
               <div className={styles.social}></div>
             </div>
           </div>
       
         </div>
         <div className={styles.cont}>
           <HeroSectionHeading>Web Team</HeroSectionHeading>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/karthick_DYjBf9XtS6.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668596438089"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Kartik S</div>
               <div className={styles.details}>Member</div>
               <div className={styles.social}></div>
             </div>
           </div>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/deep_kUuozQ8Z5R?ik-sdk-version=javascript-1.4.3&updatedAt=1668596521659"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Deep</div>
               <div className={styles.details}>Member</div>
               <div className={styles.social}></div>
             </div>
           </div>
         </div>
         <div className={styles.cont}>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/palash_kgrquqRQb?ik-sdk-version=javascript-1.4.3&updatedAt=1668596621977"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Palash</div>
               <div className={styles.details}>Member</div>
               <div className={styles.social}></div>
             </div>
           </div>
           <div className={styles.card}>
             <div className={styles.box}>
               <img
                 className={styles.pic}
                 src="https://ik.imagekit.io/cmef8hxb6/iamges/milind_Y4gild8y0g?ik-sdk-version=javascript-1.4.3&updatedAt=1668596756180"
                 alt=""
               />
             </div>
             <div className={styles.info}>
               <div className={styles.name}>Milind</div>
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
