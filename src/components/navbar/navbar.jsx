import React from 'react';
import css from './navbar.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import logo from './assets/logo.svg';
import { About } from '../index';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <>
            <nav className={css.navbarBody}>
                <Link to='landingPage' smooth={'easeOutQuart'} isDynamic={true} duration={1000}><img src={logo} alt="My logo or some shit" /></Link>
                <div className={css.navTabs}>
                    <Link to='aboutPage' smooth={'easeOutQuart'} offset={-250} isDynamic={true} duration={1000}>About</Link>
                    <Link to='projectsPage' smooth={'easeOutQuart'} offset={-140} isDynamic={true} duration={1000}>Projects</Link>
                    <a href='mailto:iancu27victor@gmail.com' target='_blank' rel="noreferrer">Contact</a>
                </div>
                <div className={css.socialIcons}>
                    <a href='https://www.linkedin.com/in/iancuvictor/' target='_blank' rel="noreferrer">
                        <BsLinkedin className={css.navIcon} size={25} />
                    </a>
                    <a href='https://github.com/iancuvictor' target='_blank' rel="noreferrer"> 
                        <BsGithub className={css.navIcon} size={25} />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;