import React  from 'react';
import styles from './footer.module.scss';
import classNames from 'classnames';

export function Footer(props) {
  
    let resumeData = props.resumeData;
    return (
      <footer>
      <div className={'row'}>
        <div className='twelve columns'>
          <ul className={styles['social-links']}>
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a target="_blank" href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
       
        <div className={styles['ending-note']}>  
        {'Loosely designed in '} <span>{'Canva'}</span> {' and built in '} <span>{'Visual Studio Code'}</span> {' with extreme dedication.'}</div>
        <div id={styles['go-top']}><a className='smoothscroll' title="Back to Top" href="#home"><i className='icon-up-open'/></a></div>
      </div>
    </footer>
    );
  
}

