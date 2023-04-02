import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/images/nextjs.png" alt="logo" width={50} height={50} />
        </div>
        <ul className={styles.NavList}>
          <li className={styles.NavItems}>
            <Link className={styles.NavItem} href="/">
              Home
            </Link>
          </li>
          <li className={styles.NavItems}>
            <Link className={styles.NavItem} href="/services">
              Services
            </Link>
          </li>
          <li className={styles.NavItems}>
            <Link className={styles.NavItem} href="/about">
              About
            </Link>
          </li>
          <li className={styles.NavItems}>
            <Link className={styles.NavItem} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
