import React from "react";
import styles from "./about.module.scss";
import classNames from "classnames";

export function About(props) {
  let resumeData = props.resumeData;

  return (
    <section className={styles["aboutSection"]} id="about">
      <div className={classNames("row", styles["main-col1"])}>
        <img className={styles["profile-pic"]} src="images/propic.png" alt="" />

        <div className={classNames("nine", "columns", styles["main-col"])}>
          <h2>{"About Me"}</h2>
          <p>{resumeData.aboutme}</p>

          <p className={classNames(styles["spoiler"], styles["about2"])}>
            {resumeData.aboutme2}
          </p>

          <p className={styles["about3"]}>{resumeData.aboutme3}</p>
        </div>
      </div>
    </section>
  );
}
