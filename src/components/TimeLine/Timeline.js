import { useEffect, useState } from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  createTheme,
  themes,
} from '@merc/react-timeline';
import { useTheme } from 'components/ThemeProvider';
import Image from 'next/image';

import { media } from 'utils/style';

const TimeLine = () => {
  const [device, setDevice] = useState('laptop');
  const { themeId, rgbAccent } = useTheme();

  useEffect(() => {
    if (window.innerWidth < media.mobile) {
      setDevice('mobile');
    } else {
      setDevice('laptop');
    }
    if (window) {
      window.addEventListener('resize', () => {
        if (window.innerWidth < media.mobile) {
          setDevice('mobile');
        } else {
          setDevice('laptop');
        }
      });
    }
  }, []);

  const LightTheme = createTheme(themes.default, {
    timeline: {
      zIndex: -1,
      background: 'transparent',
    },
    card: {
      backgroundColor: '#efefef',
      width: device == 'laptop' ? '60%' : '95%',
    },
    date: {
      with: 'min-content',
      zIndex: -1,
      backgroundColor: 'black',
      color: 'white',
    },
    marker: {
      borderColor: 'black',
    },
    timelineTrack: {
      backgroundColor: 'black',
    },
  });

  const DarkTheme = createTheme(themes.default, {
    timeline: {
      background: 'transparent',
    },
    card: {
      backgroundColor: '#efefef',
      width: device == 'laptop' ? '60%' : '95%',
      color: '#333',
      a: {
        color: '#EC24B5',
      },
    },
    date: {
      zIndex: 10,
      backgroundColor: `rgb(${rgbAccent.split(' ')[0]}, ${rgbAccent.split(' ')[1]}, ${
        rgbAccent.split(' ')[2]
      })`,
      color: 'black',
    },
    marker: {
      borderColor: `rgb(${rgbAccent.split(' ')[0]}, ${rgbAccent.split(' ')[1]}, ${
        rgbAccent.split(' ')[2]
      })`,
    },
    timelineTrack: {
      backgroundColor: `rgb(${rgbAccent.split(' ')[0]}, ${rgbAccent.split(' ')[1]}, ${
        rgbAccent.split(' ')[2]
      })`,
    },
    button: {
      backgroundColor: 'red',
    },
  });

  return (
    <Timeline
      theme={themeId == 'light' ? LightTheme : DarkTheme}
      opts={{
        layout: 'alt-evts-inline-date',
      }}
    >
      <Events>
        <TextEvent date="1/12/22" text="Desc of event" marker={() => MyMarker(themeId)} />

        <TextEvent date="1/12/22" text="Desc of event" marker={() => MyMarker(themeId)} />

        <ImageEvent
          date="4/12/22"
          text="Events"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIObT2wfc7vCHpR5IMpI3jKg84oYPR_4bXAA&usqp=CAU"
          alt="Events"
          credit="Need contents"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="https://unsplash.com/search/photos/event">
              Unstop link
            </UrlButton>
          </div>
        </ImageEvent>

        <YouTubeEvent
          date="6/12/22"
          id="yg-_-ZXaaXE"
          name="Teasers / trailer"
          text="Need contents"
          marker={() => MyMarker(themeId)}
        />
      </Events>
    </Timeline>
  );
};

export default TimeLine;

const MyMarker = themeId => (
  <Image
    src={themeId == 'light' ? '/darkLogo.png' : '/lightLogo.png'}
    width={30}
    height={30}
    alt=""
  />
);
