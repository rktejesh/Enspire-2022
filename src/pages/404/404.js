import notFoundPoster from 'assets/images/notfound.jpg';
import notFoundVideo from 'assets/videos/trailer.mp4';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Meta } from 'components/Meta';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment } from 'react';
import styles from './404.module.css';

export function Page404() {
  return (
    <section className={styles.page}>
      <Meta
        title="404 Not Found"
        description="404 page not found. This page doesn't exist"
      />
      <Transition in>
        {visible => (
          <Fragment>
            <div className={styles.details}>
              <div className={styles.text}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={0}
                  weight="bold"
                >
                  4
                  <span
                    style={{
                      color: '#FE8300',
                    }}
                  >
                    0
                  </span>
                  4
                </Heading>
                <Heading
                  aria-hidden
                  className={styles.subheading}
                  data-visible={visible}
                  as="h2"
                  level={3}
                >
                  <DecoderText text="Aww Snap :(" start={visible} delay={300} />
                </Heading>
                <Text className={styles.description} data-visible={visible} as="p">
                  This is not what you were looking for... But you just found the trailer
                  we&apos;d lost, Thanks !!! <br />
                  But everything is still awesome...
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.button}
                  data-visible={visible}
                  href="/"
                  // icon="chevronRight"
                >
                  Homepage
                </Button>
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.video}
                data-visible={visible}
                poster={notFoundPoster.src}
              >
                <source src={notFoundVideo} type="video/mp4" />
              </video>
              <a
                className={styles.credit}
                data-visible={visible}
                href="https://www.youtube.com/channel/UCRnnUmtMdoRbL9l6kGh3LZQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ecell youtube
              </a>
            </div>
          </Fragment>
        )}
      </Transition>
    </section>
  );
}
