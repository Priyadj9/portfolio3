import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import "animate.css";
import classNames from "classnames";

export function Header(props) {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsSectionVisible(true);
      } else {
        setIsSectionVisible(false);
      }
    });

    const aboutSection = document.getElementById("home");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  let resumeData = props.resumeData;
  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap" className={styles["header-nav-wrap"]}>
          <a
            className={styles["mobile-btn"]}
            href="#nav-wrap"
            title="Show navigation"
          >
            Show navigation
          </a>
          <a className={styles["mobile-btn"]} href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id={styles["nav"]} className={styles["nav"]}>
            <li className={styles["current"]}>
              <a
                className={classNames(
                  "smoothscroll",
                  "hover-nav",
                  styles["hover-nav2"]
                )}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={classNames(
                  "smoothscroll",
                  "hover-nav",
                  styles["hover-nav2"]
                )}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={classNames(
                  "smoothscroll",
                  "hover-nav",
                  styles["hover-nav2"]
                )}
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className={classNames(
                  "smoothscroll",
                  "hover-nav",
                  styles["hover-nav2"]
                )}
                href="#portfolio"
              >
                Projects
              </a>
            </li>
            {/* <li><a className={classNames('smoothscroll','hover-nav',styles['hover-nav2'])} href="#testimonials">Testimonials</a></li> */}
            <li>
              <a
                className={classNames(
                  "smoothscroll",
                  "hover-nav",
                  styles["hover-nav2"]
                )}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* <div className={classNames('row',styles['banner'])}>
          <div className={classNames(styles['banner-cont'])}>
         <img className={classNames(styles['propic'])}  src="images/propic.png" alt="" />
            <div className={styles['banner-text']}>
               <span  className={classNames('responsive-headline',styles['banner-text1'],isSectionVisible && 'animate__animated', isSectionVisible && 'animate__bounce')}>{'Priyadarshana Jain'}</span>
               <div className={styles['banner-text2']}>{resumeData.role}
               </div>
               <hr/>
              
            </div>
            <div className={styles['social-cont']}>
            <ul className={styles['social']}>
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={`${item.className}`}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
               <p className={styles['scrolldown']}>
            <a className='smoothscroll' href="#about"><i className={classNames('icon-down-circle',styles['icon-down-header'])}></i></a>
         </p>

               </div>
            </div>
           
         </div>

         */}

        <div className={classNames("row", styles["banner"])}>
          <div className={classNames(styles["banner-text"])}>
            <h1
              className={classNames(
                "responsive-headline",
                isSectionVisible && "animate__animated",
                isSectionVisible && "animate__bounce"
              )}
            >
              {"PRIYADARSHANA JAIN"}
            </h1>
            <h3 style={{ color: "#fff", fontFamily: '"DM Sans", sans-serif' }}>
              {resumeData.role}
              {resumeData.roleDescription}
            </h3>
            <hr />
            <ul className={styles["social"]}>
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className={styles["scrolldown"]}>
          <a className="smoothscroll" href="#about">
            <i className={classNames("icon-down-circle")}></i>
          </a>
        </p>
      </header>
    </React.Fragment>
  );
}
