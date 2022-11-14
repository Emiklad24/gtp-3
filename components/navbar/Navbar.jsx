/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from "logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles["gpt3__navbar-links"]}>
        <div className={styles["gpt3__navbar-links_logo"]}>
          <Image src="/logo.svg" alt="gpt3-logo" width={80} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
