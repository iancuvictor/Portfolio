import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import css from './footer.module.css';

function Footer(){
  return (
    <div className={css.footerBody}>
          <div className={css.socialIcons}>
              <a href='https://www.linkedin.com/in/iancuvictor/' target='_blank' rel="noreferrer">
                  <BsLinkedin className={css.navIcon} size={25} />
              </a>
              <a href='https://github.com/iancuvictor' target='_blank' rel="noreferrer">
                  <BsGithub className={css.navIcon} size={25} />
              </a>
          </div>
    </div>
  );
};

export default Footer;