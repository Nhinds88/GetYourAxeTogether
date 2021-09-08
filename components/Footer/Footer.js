import Image from 'next/image';

import Container from '../Container';

import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <Image src="/nickfox2.png" alt="Hinds Designs Logo" width={109} height={34} />
      </Container>
    </footer>
  )
}

export default Footer;