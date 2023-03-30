import { useEffect, useState, useRef, useCallback } from 'react'
import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import classes from './MobileNavigation.module.css'
import classNames from 'classnames';

let cx = classNames.bind(classes);

const MobileNavigation = () => {
    gsap.registerPlugin(ScrollTrigger)
    const navRef = useRef(null);
    const buttonRef = useRef(null);

    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const experienceRef = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => { setIsOpen(true) };
    const closeMenu = () => { setIsOpen(false) };

    const setFixed = useCallback(() => gsap.set([navRef.current, buttonRef.current], {
        position: 'fixed'
    }), []) 

    const setAbsolute = useCallback(() => gsap.set([navRef.current, buttonRef.current], {
        position: 'absolute'
    }), [])
   
    useEffect(() => {
        var menuTimeline = gsap.timeline({
            defaults: {duration: 0.04},
            onUpdate: () => { }
        })
        .addLabel("start", 0)
        .fromTo(buttonRef.current, {
            "--button-before-y": "50%",
            "--button-before-rotation": "45deg",
            "--button-after-y": "50%",
            "--button-after-rotation": "-45deg",
            "--button-scale": 0,
            "--button-shadow-blur": "16px",
            "--button-shadow-spread": "20px",
            "--button-shadow-inner-spread": "9px",
            "--button-shadow-color": "rgba(52, 84, 209, 0.5)"
        },{
            "--button-before-y": "50%",
            "--button-before-rotation": "45deg",
            "--button-after-y": "50%",
            "--button-after-rotation": "-45deg",
            "--button-scale": 1,
            "--button-shadow-blur": "0px",
            "--button-shadow-spread": "1200px",
            "--button-shadow-inner-spread": "20px",
            "--button-shadow-color": "rgba(0, 0, 0, 0.9)"
        })
        // .fromTo(aboutRef.current, {transitionDelay: '0s'}, {transitionDelay: '2s'}, "start")
        // .fromTo(workRef.current, {transitionDelay: '0.5s'}, {transitionDelay: '0.15s'}, "start")
        // .fromTo(experienceRef.current, {transitionDelay: '0.1s'}, {transitionDelay: '0.1s'}, "start")
        // .fromTo(testimonialsRef.current, {transitionDelay: '0.15s'}, {transitionDelay: '0.5s'}, "start")
        // .fromTo(contactRef.current, {transitionDelay: '0.2s'}, {transitionDelay: '0s'}, "start")
        // .fromTo(navRef.current, // causing weird offset of hamburger
        //     {y: 0}, {y: 35, duration: 1}, "start+=0.1"
        // )
        .fromTo(".navItem", {
            "--nav-item-scale": 0.2
        }, {
            "--nav-item-scale": 1,
            duration: 0.2
        }, "start+=0.1")
        .fromTo([testimonialsRef.current, contactRef.current], {
            "--nav-item-opacity": 0
        }, {
            "--nav-item-opacity": 1,
            duration: 0.4
        })
        .progress(0).pause();

        if (isOpen && !menuTimeline.isActive()) {
            // console.log('isOpen: ', isOpen, ' activeTimeline: ', menuTimeline.isActive())
            // console.log('progress: ', menuTimeline.progress())
            menuTimeline.play();
            // menuTimeline.pause();
        } else if (!isOpen && menuTimeline.progress() === 1) {
            // console.log('isOpen: ', isOpen)
            // console.log('isActive: ', menuTimeline.isActive())
            // console.log('progress: ', menuTimeline.progress())
            menuTimeline.reverse(0);
        }


        /* Sticky Toggle Trigger */

        

        ScrollTrigger.create({
            trigger: document.querySelector('#about'),
            start: "top top",
            end: 99999,
            onEnter: () => setFixed(),
            onLeaveBack: () => setAbsolute()
        })

    }, [isOpen, setFixed, setAbsolute])

    

    return (
        <>
            <input 
                id="mobile-menu-toggle" 
                className={classes.toggle} 
                type="checkbox" 
                checked={isOpen}
                onChange={isOpen ? closeMenu : openMenu}
                ></input>
            <label htmlFor="mobile-menu-toggle" className={classes.toggleContainer} >
                <span ref={buttonRef} className={classes.toggleButton}></span>
            </label>

            <nav ref={navRef}  className={classes.mobileNav}>
                <a ref={aboutRef} className={cx('navItem', 'font-play', classes.mobileNavItem)} href="#about" onClick={closeMenu}><strong>About</strong></a>
                <a ref={workRef} className={cx('navItem', 'font-play',classes.mobileNavItem)} href="#work" onClick={closeMenu}><strong>Work</strong></a>
                <a ref={experienceRef} className={cx('navItem', 'font-play',classes.mobileNavItem)} href="#experience" onClick={closeMenu}><strong>Experience</strong></a>
                <a ref={testimonialsRef} className={cx('navItem', 'font-play',classes.mobileNavItem)} href="#testimonials" onClick={closeMenu}><strong>Testimonials</strong></a>
                <a ref={contactRef} className={cx('navItem', 'font-play',classes.mobileNavItem)} href="#contact" onClick={closeMenu}><strong>Contact</strong></a>
            </nav>
        </>
    )
}

export default MobileNavigation;

{/* <>
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
        </> */}