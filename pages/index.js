import Head from "next/head";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "../containers";
import { CTA, Brand, Navbar } from "../components";
import $ from "../styles/index.module.css";

const Home = () => {
  return (
    <div className={`${$.App}`}>
      <div className={`${$.gradient__bg}`}>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
