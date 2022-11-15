/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles["gpt3__navbar-links"]}>
        <div className={styles["gpt3__navbar-links_logo"]}>
          <Image src="/logo.svg" alt="gpt3-logo" width={62.56} height={16.02} />
        </div>

        <div className={styles["gpt3__navbar-links_container"]}>
          <Menu />
        </div>
      </div>

      <div className={styles["gpt3__navbar-sign"]}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles["gpt3__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}

        {toggleMenu && (
          <div
            className={`${styles["gpt3__navbar-menu_container"]}, ${styles["scale-up-center"]}`}
          >
            <div className={styles["gpt3__navbar-container_links"]}>
              <Menu />
              <div
                className={styles["gpt3__navbar-menu__container-links-sign"]}
              >
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
