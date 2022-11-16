import { useEffect, useState } from 'react';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
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
        <ImageEvent
          date="03/12/22"
          text="Startup Expo"
          src="/StartUpExpo.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="https://unstop.com/competition/startup-expo-indian-institute-of-information-technology-iiit-lucknow-467030">
              Unstop link
            </UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="10/11/22"
          text="Million Dollar Idea"
          src="/MillionDollarIdea.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="#">Unstop link</UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="02/12/22"
          text="Find X"
          src="/FindX.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="https://unstop.com/p/find-x-indian-institute-of-information-technology-iiit-lucknow-505048">
              Unstop link
            </UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="10/11/22"
          text="Avenge the Fallen"
          src="/AvengeTheFallen.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="https://unstop.com/competition/avenge-the-fallen-indian-institute-of-information-technology-iiit-lucknow-487259">
              Unstop link
            </UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="24/11/22"
          text="Meme For Marketing"
          src="/MemeForMarketing.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="#">Unstop link</UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="30/11/22"
          text="E-ship Quiz"
          src="/EshipQuiz.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="#">Unstop link</UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="01/12/22"
          text="Mystery Rooms"
          src="/MysteryRooms.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="#">Unstop link</UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="02/12/22"
          text="IPL Auction"
          src="/IPLAuction.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="#">Unstop link</UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="02/12/22"
          text="Mystery Of Groups"
          src="/MysteryGroups.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="#">Unstop link</UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="01/12/22"
          text="Sell Out"
          src="/SellOut.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="#">Unstop link</UrlButton>
          </div>
        </ImageEvent>
        <ImageEvent
          date="01/12/22"
          text="Win On StockPe"
          src="/WinOnStockPe.jpeg"
          alt="Events"
          credit="Registeration Link"
          marker={() => MyMarker(themeId)}
        >
          <div>
            <UrlButton href="https://unstop.com/competition/win-on-stockpe-mock-trading-competition-indian-institute-of-information-technology-iiit-lucknow-483702">
              Unstop link
            </UrlButton>
          </div>
        </ImageEvent>
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
