/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className={`${styles.gpt3__navbar}`}>
      <div className={styles.gpt3__navbar - links}>
        <div className={styles.gpt3__navbar - links_logo}>
          <img src={logo} alt="gpt3-logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
