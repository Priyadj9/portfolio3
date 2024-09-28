import React, { useRef, useState } from "react";
import classNames from "classnames";
import styles from "./portfolio.module.scss";

export function Portfolio(props) {
  const [isHovered, setIsHovered] = useState([false, false, false, false]); // Array to track hover state for each item

  const handleMouseEnter = (index) => {
    setIsHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = true;
      return updatedHovered;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevHovered) => {
      const updatedHovered = [...prevHovered];
      updatedHovered[index] = false;
      return updatedHovered;
    });
  };

  let resumeData = props.resumeData;

  return (
    <section className={styles["portfolio-section"]} id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <span className={styles["portfolio-h1"]}>Projects</span>
          <div
            id={styles["portfolio-wrapper"]}
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, index) => {
                return (
                  <a target="_blank" href={item.projectUrl}>
                    <div
                      key={index}
                      // Add a unique key for each item
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      sx={{ position: "relative" }}
                      className={classNames(
                        "columns",
                        styles["portfolio-item"]
                      )}
                    >
                      <div
                        style={{
                          position: isHovered[index] ? "relative" : "static",
                          top: "-5px", // Adjust the top position as needed
                          left: "5px", // Adjust the left position as needed
                          color: isHovered[index] ? "#e6450d" : "#444",
                        }}
                        className={classNames(styles["item-wrap"], "item-wrap")}
                      >
                        <a
                          style={{
                            border: isHovered[index] && "3px solid #e6450d",
                            borderRadius: "0.25rem",
                          }}
                          className={styles["item-img-a"]}
                          href="#modal-01"
                        >
                          <img
                            src={`${item.imgurl}`}
                            className={styles["item-img"]}
                          />
                        </a>
                      </div>
                      <div className={styles["item-detail-container"]}>
                        <div className={styles["item-detail-name"]}>
                          <span
                            style={{
                              color: isHovered[index] ? "#e6450d" : "#444",
                            }}
                          >
                            {item.name}
                          </span>
                          <span className={styles["icon-cont"]}>
                            <i
                              className="fa fa-location-arrow"
                              aria-hidden="true"
                              style={{
                                position: isHovered[index]
                                  ? "relative"
                                  : "static",
                                top: "-7px", // Adjust the top position as needed
                                left: "8px", // Adjust the left position as needed
                                color: isHovered[index] ? "#e6450d" : "#444",
                              }}
                            ></i>
                          </span>
                        </div>
                        <div className={styles["item-detail-des"]}>
                          {item.detailedDescription}
                        </div>
                      </div>
                      <div className={styles["portfolio-item-overlay"]}></div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
