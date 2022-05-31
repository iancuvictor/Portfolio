import React from 'react';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript, SiAdobephotoshop, SiGit } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import css from './about.module.css';

function About() {
    return (
        <div id='aboutPage' className={css.aboutPage}>
            <div className={css.content}>
                <h1>About me/the skills that I have</h1>
                <p>I know you don't care about this portfolio website that much (or at all) so I won't bore you. I'll keep it tight:<br></br><br></br><span style={{ color: '#fff' }}>My specialization is Frontend Web Development</span><br></br><br></br><span style={{ color: '#fff' }}>I studied (study) at: <br></br>- Colegiul Economic "Emanuil Gojdu" Hunedoara || Tourism and Alimentation</span>
                <br></br>
                And I haven't graduated yet.
                <br></br>
                <br></br>
                    I plan on studying at an University in Cluj-Napoca, most likely the Physical Education one.
                <br></br>
                <br></br>
                <span style={{ color: '#fff' }}> My Skills: </span></p>
                <div className={css.skillsContent}>
                    <div className={css.languages}>
                        <h1>Languages</h1>
                        <ul>
                            <a className={css.jsText}>Javascript</a>
                            <SiJavascript className={css.jsIcon} size={30} />
                        </ul>
                        <ul>
                            <a href='https://www.google.com/search?q=is+html+a+language%3F&sxsrf=APq-WBuFeJFpbfG9JNeso4e76O-XeY5U2Q%3A1650979526892&source=hp&ei=xvJnYrXhM8O8kwXY4J2ADA&iflsig=AHkkrS4AAAAAYmgA1vj9OGy4DKX8CgybioGazIV8MBii&ved=0ahUKEwi13OqB6rH3AhVD3qQKHVhwB8AQ4dUDCAc&uact=5&oq=is+html+a+language%3F&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBQgAEMsBMgUIABDLATIFCAAQywEyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46CwgAEIAEELEDEIMBOg4ILhCABBCxAxDHARCjAjoFCAAQgAQ6CAgAEIAEELEDOhEILhCABBCxAxCDARDHARDRAzoGCCMQJxATOgQIABBDOgsILhCABBDHARCvAToICC4QgAQQsQM6CAguELEDEIMBOgUILhCABDoICAAQFhAKEB5QAFjUEWCME2gAcAB4AYAB2wGIAboPkgEGMTQuNC4xmAEAoAEB&sclient=gws-wiz' className={css.htmlText}>HTML (yes)</a>
                            <ImHtmlFive className={css.htmlIcon} size={30} />
                        </ul>
                        <ul>
                            <a className={css.cssText}>CSS</a>
                            <IoLogoCss3 className={css.cssIcon} size={30} />
                        </ul>
                    </div>

                    <div className={css.frameworks}>
                        <h1>Frameworks</h1>
                        <ul>
                            <a className={css.reactText}>React.js</a>
                            <FaReact className={css.reactIcon} size={30} />
                        </ul>
                    </div>

                    <div className={css.otherTools}>
                        <h1>Other Tools</h1>
                        <ul>
                            <a className={css.photoText}>Photoshop</a>
                            <SiAdobephotoshop className={css.photoIcon} size={30} />
                        </ul>
                        <ul>
                            <a className={css.gitText}>Git</a>
                            <SiGit className={css.gitIcon} size={30} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;