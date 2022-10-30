import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import TimeLine from 'components/TimeLine/Timeline';
import { Intro } from 'layouts/Home/Intro';
import { EventSummary } from 'layouts/Home/EventSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Ignite the spark', '2022'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const eventOne = useRef();
  const eventTwo = useRef();
  const eventThree = useRef();

  useEffect(() => {
    const sections = [intro, eventOne, eventTwo, eventThree];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Ecell Enspire 2022"
        description="Official page of Enspire, a flagship event by Ecell iiitl."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <EventSummary
        id="workshops"
        sectionRef={eventOne}
        visible={visibleSections.includes(eventOne.current)}
        index={1}
        title="Educational workshops"
        description="Get first hand experience and learn from quality workshops which fare across a wide area of interests."
        buttonText="view workshops"
        buttonLink="./events"
        type="right"
      />
      <EventSummary
        id="events"
        alternate
        sectionRef={eventTwo}
        visible={visibleSections.includes(eventTwo.current)}
        index={2}
        title="Challenging Events"
        description="Unleash your competitive spirit by participating in 20+ competitions and get a chance to win exciting prices."
        buttonText="View events"
        buttonLink="./events"
        type="left"
      />
      <EventSummary
        id="talks"
        sectionRef={eventThree}
        visible={visibleSections.includes(eventThree.current)}
        index={3}
        title="Inspiring talks"
        description="Attend inspiring talks by famous personalities"
        buttonText="View talks"
        buttonLink={'./events'}
        type="right"
      />
      <TimeLine />
      <Footer />
    </div>
  );
};
