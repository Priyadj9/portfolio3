import React from 'react';
import classNames from 'classnames';
import styles from './testimonials.module.scss';

export function Testimonials (props) {
 
    let resumeData = props.resumeData;
    return (
      <section id={styles['testimonials']}>
        <div className={styles['text-container']}>
          <div className='row'>
            <div className={classNames('two','columns',styles['header-col'])}>
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className={classNames('ten','columns',styles['flex-container2'],'flex-container')}>
              <div className={classNames(styles['flexslider2'],'flexslider')}>
                <ul className={classNames(styles['slides2'],'slides')}>
                  {
                    resumeData.testimonials && resumeData.testimonials.map((item)=>{
                      return(
                        <li>
                          <blockquote>
                            <p>
                            {item.description}
                            </p>
                           
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  
}

export default Testimonials;