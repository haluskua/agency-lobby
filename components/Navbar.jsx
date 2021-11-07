import styles from "../styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.container}>
      <h2><Link href="/"> OUXUID </Link></h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
