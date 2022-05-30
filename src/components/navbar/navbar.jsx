import React, { useState } from 'react';
import css from './navbar.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { RiCloseFill , RiMenuFill } from 'react-icons/ri';
import logo from './assets/logo.svg';
import { Link } from 'react-scroll';

const SideMenu = () => (
    <>
        <div className={css.navTabs}>
            <Link to='aboutPage' smooth={'easeOutQuart'} offset={100} isDynamic={true} duration={1000}>About</Link>
            <Link to='projectsPage' smooth={'easeOutQuart'} offset={0} isDynamic={true} duration={1000}>Projects</Link>
            <a href='mailto:iancu27victor@gmail.com' target='_blank' rel="noreferrer">Contact</a>
        </div>
        <div className={css.socialIcons}>
            <a href='https://www.linkedin.com/in/iancuvictor/' target='_blank' rel="noreferrer">
                <BsLinkedin className={css.navIcon} size={30} />
            </a>
            <a href='https://github.com/iancuvictor' target='_blank' rel="noreferrer">
                <BsGithub className={css.navIcon} size={30} />
            </a>
        </div>
    </>
)

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

    

    return (
        <>
            <nav className={css.navbarBody}>
                <Link to='landingPage' smooth={'easeOutQuart'} isDynamic={true} duration={1000}><img className={css.navbarLogo} src={logo} alt="My logo or some shit" /></Link>
                <div className={css.normalNavbar}>
                    <SideMenu />
                </div>

                <div className={css.navbarSideMenu}>
                    {toggleMenu
                        ? <RiCloseFill color='#fff' size={30} onClick={() => setToggleMenu(false)} />
                        : <RiMenuFill color='#fff' size={30} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                    <div className={css.sideMenuContainer}>
                            <SideMenu />
                    </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;