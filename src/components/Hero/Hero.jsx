import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prasad</h1>
        <p className={styles.description}>
          "I’m a passionate Full Stack Web Developer with a strong foundation in both front-end and back-end technologies, capable of transforming ideas into functional, user-friendly, and visually appealing web applications. I enjoy building seamless digital experiences — from designing responsive, intuitive interfaces to developing robust server-side logic and efficient databases.
        </p>
        <div className={styles.buttons}>
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prasadtak88@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactBtn}>
             Contact Me
            </a>

        <a href={getImageUrl("hero/resume.pdf")} download="Prasad's_Resume.pdf" className={styles.contactBtn}>
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/pro1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
