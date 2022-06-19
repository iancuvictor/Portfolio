import React from 'react';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import css from './projects.module.css';
import { ProjectSlide } from '../index';
import UAEEstate from './assets/UAEEstate.png';
import portfolio from './assets/portfolio.png';



function Projects() {
    return (
        <div id='projectsPage' className={css.projectsPage}>
            <div className={css.background}></div>
            <div className={css.content}>
                <h1>Projects</h1>
                <div className={css.projectsList}>
                    <ProjectSlide 
                        image={UAEEstate} 
                        title={'United Arab Emirates Real Estate'} 
                        description={`This project showcases my Frontend skills (the backend being 90% copied from another source). 
                                    Note that I do NOT know Next.js, so Frontend aside, this project is pretty much a copy.`} 
                        madeIn={<><SiNextdotjs size={25} /><ImHtmlFive size={25} /><IoLogoCss3 size={25} /><SiJavascript size={25} /></>} 
                        githubLink={'https://github.com/iancuvictor/Real-Estate-Proiect-Deployment'}/>
                    <ProjectSlide 
                        image={portfolio} 
                        title={'This Portfolio Website'} 
                        description={'Well... if you want to see the source code of this website, there you go:'} 
                        madeIn={<><FaReact size={25} /><ImHtmlFive size={25} /><IoLogoCss3 size={25} /><SiJavascript size={25} /></>} 
                        githubLink={'https://github.com/iancuvictor/Portfolio'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;