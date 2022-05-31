import React from 'react';
import { BsGithub } from 'react-icons/bs';
import css from './projectSlide.module.css';

function ProjectSlide(props) {
  return (
    <a target='_blank' rel="noreferrer" href={props.githubLink}>
    <div className={css.projectSlideBody}>
      <img className={css.image} src={props.image} alt="project preview" />
      <h1 className={css.title}>{props.title}</h1>
      <div className={css.madeIn}>{props.madeIn}</div>
      <p className={css.description}>{props.description}</p>
      <div className={css.footer}>
        {/*<BsGithub className={css.gitIcon} size={30} />*/}
      </div>
      {/*<div className={css.madeIn}>{props.madeIn}</div>*/}
    </div>
    </a >
  );
};

export default ProjectSlide;