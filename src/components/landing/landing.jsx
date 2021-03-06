import React from 'react';
import css from './landing.module.css';

function Landing() {
  return (
    <div id='landingPage' className={css.landingPage}>
      <div className={css.landDesc}>
        <h1><span className={css.iancu}>Iancu </span><span className={css.victor}>Victor</span> - <span className={css.iuliu}>Iuliu</span></h1>
        <p>Romanian Student working as a Web Developer</p>
      </div>
    </div>
  );
};

export default Landing;