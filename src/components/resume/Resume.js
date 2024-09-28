import React,{useState,useRef,useEffect} from 'react';
import classNames from 'classnames';
import styles from './resume.module.scss';

export function Resume(props) {

  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
    let resumeData = props.resumeData;

   // Array to track hover state for each item
    const resumeHref= 'https://drive.google.com/file/d/1KXo8jYU4FN2cUAFV04Kfgw5XBnG9WsPv/view?usp=sharing';

    const iconRef = useRef(null);

    const handleMouseEnter = () => {
      setIsHovered(true);
      const iconElement = iconRef.current;
      if (iconElement) {
        iconElement.style.position = 'relative';
        iconElement.style.top = '-10px'; // Adjust the top position as needed
        iconElement.style.left = '10px'; // Adjust the left position as needed
      }
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      const iconElement = iconRef.current;
      if (iconElement) {
        iconElement.style.position = 'static';
        iconElement.style.top = '';
        iconElement.style.left = '';
      }
    };

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setIsSectionVisible(true);
        } else {
          setIsSectionVisible(false);
        }
      });
  
      const aboutSection = document.getElementById('resume');
      if (aboutSection) {
        observer.observe(aboutSection);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
      <section className={styles['resume-section']} id='resume'>

<div className={classNames('row',styles['work'])}>
            <div className={classNames('three','columns',styles['header-col'])}>
               <h1><span>Resume</span></h1>
            </div>

            <div className={classNames('nine','columns',styles['main-col'])}>
              {
                 <div className='row item'>
                 <a target="_blank" href={resumeHref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={classNames('twelve', 'columns',styles['resume-box'],isSectionVisible && 'animate__animated', isSectionVisible && 'animate__bounce')}>
                  
                    <span className={styles['resume-heading']}> {'View Full Resume'}</span>
                    <i ref={iconRef}
                            className={classNames('fa','fa-location-arrow',styles['icon-resume'])}
                            aria-hidden="true"
                           
                          ></i>
                  
                 </a>

              </div>
               
              }
            </div> 
         </div>




        <div className={classNames('row',styles['work'])}>
            <div className={classNames('three','columns',styles['header-col'])}>
               <h1><span>Work</span></h1>
            </div>

            <div className={classNames('nine','columns',styles['main-col'])}>
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className='row item'>
                       <div className='twelve columns'>
                          <h3>{item.CompanyName}</h3>
                          <p className={styles['info']}>
                          {item.specialization}
                          <span>&bull;</span> <em className={styles['date']}>{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p className={styles['info2']}>
                          <div><span>&bull;</span> {item.Achievements1}</div>
                          <div><span>&bull;</span> {item.Achievements2}</div>
                          <div><span>&bull;</span> {item.Achievements3}</div>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className={classNames('row',styles['skill'])}>

            <div className={classNames('three','columns',styles['header-col'])}>
               <h1><span>Skills</span></h1>
            </div>

            <div className={classNames('nine','columns',styles['main-col'])}>

             
   				<div className={styles['bars']}>

   				   <ul className={styles['skills']}>
              {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={classNames(styles['bar-expand'],styles[`${item.skillname.toLowerCase()}`])}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  
}