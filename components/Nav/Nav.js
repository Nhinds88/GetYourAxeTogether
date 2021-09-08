import Link from 'next/link';
import Image from 'next/image';

// import { FaShoppingCart } from 'react-icons/fa';

import Container from '../Container';

import styles from './Nav.module.css';

const Nav = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <p className={styles.title}>
          <Link href="/">
            <Image src="/axecross.png" alt=" Axe Logo " width="200" height="200" />
          </Link>
        </p>

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            {/* <FaShoppingCart /> */}
            <strong className="sr-only">Bag </strong>
            <span className="snipcart-total-price">0.00gp</span>
          </a>
        </p>
      </Container>
    </nav>
  )
}

export default Nav;