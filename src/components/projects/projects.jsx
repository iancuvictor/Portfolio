import React from 'react';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiAdobephotoshop } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import css from './projects.module.css';
import { ProjectSlide } from '../index';
import ukraine from './assets/ukraine.png';
import portfolio from './assets/portfolio.png';



function Projects(props) {
    return (
        <div id='projectsPage' className={css.projectsPage}>
            <div className={css.content}>
                <h1>Projects</h1>
                <div className={css.projectsList}>
                    <ProjectSlide image={ukraine} title={'The Ukrainian War'} description={'This is a project I started making at the beginning of the Russo-Ukrainian war. It is not updated live, and it wasn\'t meant to be. This project will be finished at the end of this conflict.'} madeIn={<><FaReact size={25} /><ImHtmlFive size={25} /><IoLogoCss3 size={25} /><SiJavascript size={25} /></>} githubLink={'https://github.com/iancuvictor'}/>
                    <ProjectSlide image={portfolio} title={'This Portfolio Website'} description={'Well... if you want to see the source code of this website, there you go:'} madeIn={<><FaReact size={25} /><ImHtmlFive size={25} /><IoLogoCss3 size={25} /><SiJavascript size={25} /></>} githubLink={'https://github.com/iancuvictor'}/>
                </div>
            </div>
            <div className={css.background}></div>
        </div>
    );
};

export default Projects;