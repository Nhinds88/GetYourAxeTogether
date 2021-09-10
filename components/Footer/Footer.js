import Image from 'next/image';

import Container from '../Container';

import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <p>A Medieval Merchants Digital Marketplace!</p>
        <Image src="/nickfox3.png" alt="Hinds Designs Logo" width={200} height={64} />
      </Container>
    </footer>
  )
}

export default Footer;