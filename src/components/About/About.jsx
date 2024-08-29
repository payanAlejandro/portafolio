import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <br/>
              <p>
              Specialized in Python and Node.js, with experience in API creation and database management.
              Able to build and maintain scalable systems, ensuring efficiency and security in server-side applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <br/>
              <p>
              Specialized in React and JavaScript, with experience in creating dynamic and responsive user interfaces. 
              Able to transform designs into interactive web applications, optimizing the user experience and ensuring smooth performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
              <img src={getImageUrl("about/salesforce.png")} alt="SF icon" className={styles.aboutItemText2} />
              <div className={styles.aboutItemText2}>
                <h3>Salesforce & Mulesoft integration</h3>
                <br/>
                <p>
                Developer specialized in MuleSoft, with experience in integrating Salesforce and other systems. 
                Able to create APIs and automate processes to connect applications and optimize business workflows.
                </p>
              </div>
            </li>

        </ul>
      </div>
    </section>
  );
};
