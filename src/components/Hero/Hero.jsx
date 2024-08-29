import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Alejandro Payan</h1>
        <p className={styles.description}>
        Software Development and Management Engineer specialized in backend, with experience in creating robust systems and APIs. Currently, I'm learning MuleSoft and Salesforce to expand my skills in system integration and CRM.</p>
        <a href="mailto:payan.m.alejandro@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Alejandro.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
