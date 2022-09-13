import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const NavBar: NextPage = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.inputContainer}>
          <SearchIcon />
          <input
            type="text"
            placeholder="search"
            className={styles.searchInput}
          />
        </div>
        <h1 className={styles.navbarTitle}>Magic Gi's</h1>
        <div className={styles.iconsContainer}>
          <Link href="/account">
            <PersonIcon className={styles.icons} />
          </Link>
          <Link href="/cart">
            <ShoppingCartIcon className={styles.icons} />
          </Link>
        </div>
      </div>
      <nav className={styles.linkContainer}>
        <Link href="/shop">
          <a className={styles.link}>Shop</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About Us</a>
        </Link>
        <Link href="/contact">
          <a className={styles.link}>Contact Us</a>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
