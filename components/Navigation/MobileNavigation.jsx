import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import classes from './Navigation.module.css'
import classNames from 'classnames';

let cx = classNames.bind(classes);

const MobileNavigation = () => {
    gsap.registerPlugin(ScrollTrigger)
    const navRef = useRef(null);
    const buttonRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
   
    useEffect(() => {

        /* Sticky Toggle Trigger */

        const setFixed = () => gsap.set([navRef.current, buttonRef.current], {
            position: 'fixed'
        })

        const setAbsolute = () => gsap.set([navRef.current, buttonRef.current], {
            position: 'absolute'
        })

        ScrollTrigger.create({
            trigger: document.querySelector('#about'),
            start: "top top",
            end: 99999,
            onEnter: () => setFixed(),
            onLeaveBack: () => setAbsolute()
        })

    }, [])

    

    return (
        <>
            <input 
                id="mobile-menu-toggle" 
                className={classes.toggle} 
                type="checkbox" 
                checked={isOpen}
                onChange={toggleMenu}
                ></input>
            <label htmlFor="mobile-menu-toggle" className={classes.toggleContainer} >
                <span ref={buttonRef} className={classes.buttonToggle}></span>
            </label>

            <nav ref={navRef}  className={classes.mobileNav}>
                <a className={cx('font-play', classes.mobileNavItem)} href="#about" onClick={toggleMenu}><strong>About</strong></a>
                <a className={cx('font-play',classes.mobileNavItem)} href="#work" onClick={toggleMenu}><strong>Work</strong></a>
                <a className={cx('font-play',classes.mobileNavItem)} href="#experience" onClick={toggleMenu}><strong>Experience</strong></a>
                <a className={cx('font-play',classes.mobileNavItem)} href="#testimonials" onClick={toggleMenu}><strong>Testimonials</strong></a>
                <a className={cx('font-play',classes.mobileNavItem)} href="#contact" onClick={toggleMenu}><strong>Contact</strong></a>
            </nav>
        </>
    )
}

export default MobileNavigation;