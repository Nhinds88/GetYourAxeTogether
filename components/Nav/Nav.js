import Link from 'next/link';
import Image from 'next/image';

import Container from '../Container';

import styles from './Nav.module.css';

const Nav = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <p className={styles.title}>
          <div className={styles.pages}>
            <Link href="/">
              <Image src="/logo.png" alt=" Axe Logo " width="161" height="82" />
            </Link>
            <div className={styles.shieldlink}>
              <Link href="/shields">Shields</Link>
            </div>
            <div className={styles.armorlink}>
              <Link href="/armor">Armor</Link>
            </div>
            <div className={styles.weaponlink}>
              <Link href="/weapons">Weapons</Link>
            </div>
          </div>
        </p>

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            {/* <span className="snipcart-total-price">0gp</span> */}
            <Image src="/cart.png" alt="Medieval Cart" width="50" height="35" />
          </a>
        </p>
      </Container>
    </nav>
  )
}

export default Nav;