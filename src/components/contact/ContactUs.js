import React from 'react';
import styles from './contact.module.scss';
import classNames from 'classnames';


export function ContactUs () {

    return (
      <section className={styles['contact-section']} id='contact'>
          <div className={classNames('row',styles['section-head'])}>
            <div className={classNames('ten','columns',styles['container'])}>
              <span className={styles['lead']}>
                {'Let\'s '}<span>{'Connect'}</span>{', '}<span>{'Innovate'}</span>{' & '}<span>{'Work'}</span>{' Together'}
            
              </span>
              <p className={styles['lead2']}>
              {'Get in touch with me via email or social.'}
              </p>
              <div className={styles['contact-box']}>
                <div className={styles['contact-email']}>
                <i
                            className={classNames('fa','fa-envelope',styles['icon-email'])}
                            aria-hidden="true"
                           
                          ></i>
                        <span>{'priyadarshanajain290@gmail.com'}</span>
                </div>
                <div className={styles['contact-phone']}>
                <i
                            className={classNames('fa','fa-phone',styles['icon-phone'])}
                            aria-hidden="true"
                           
                          ></i>
                        <span>{'+91-9615290290'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
  
}
