import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>{`Made with ❤️ `}</span>
      <Link
        secondary
        className={styles.link}
        href="https://ecell-iiitl.netlify.app/"
        target="_self"
      >
        {`Ecell IIIT Lucknow `}
      </Link>
      {` © ${new Date().getFullYear()}`}
    </Text>
  </footer>
);
