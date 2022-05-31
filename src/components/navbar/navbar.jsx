import React, { useState } from 'react';
import css from './navbar.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { RiCloseFill , RiMenuFill } from 'react-icons/ri';
import logo from './assets/logo.svg';
import { Link } from 'react-scroll';

const SideMenu = (props) => (

    <>
        <div className={css.navTabs}>
            <Link onClick={props.closeFunction} to='aboutPage' smooth={'easeOutQuart'} offset={100} isDynamic={true} duration={1000}><p className={css.navText}>About</p></Link>
            <Link onClick={props.closeFunction} to='projectsPage' smooth={'easeOutQuart'} offset={0} isDynamic={true} duration={1000}><p className={css.navText}>Projects</p></Link>
            <a href='mailto:iancu27victor@gmail.com' target='_blank' rel="noreferrer"><p className={css.navText}>Contact</p></a>
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

    function closeMenu(){
        setToggleMenu(false);
    }

    return (
        <>
            {/*${ toggleMenu ? "" : "noScroll" }*/}
            <nav className={`${css.navbarBody}`}>
                <Link to='landingPage' smooth={'easeOutQuart'} isDynamic={true} duration={1000}><img className={css.navbarLogo} src={logo} alt="My logo or some shit" /></Link>
                <div className={css.normalNavbar}>
                    <SideMenu />
                </div>

                <div className={css.navbarSideMenu}>
                    {toggleMenu
                        ? <RiCloseFill className={css.hamburgerIcon} color='#fff' size={30} onClick={() => setToggleMenu(false)} />
                        : <RiMenuFill className={css.hamburgerIcon} color='#fff' size={30} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className={css.sideMenuContainer}>
                            <SideMenu closeFunction={closeMenu}/>
                    </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;