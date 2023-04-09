import { useEffect, useState, useRef } from 'react'
import useLayoutEffect from '../../hooks/useIsomorphicLayoutEffect';
import { gsap, ScrollTrigger } from '../../config/gsapConfig';
import classes from './MobileNavigation.module.css'
import classNames from 'classnames';

let cx = classNames.bind(classes);

const MobileNavigation = () => {
    const scopeRef = useRef();
    const timeline = useRef();

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
   
    useLayoutEffect(() => {

        const ctx = gsap.context(() => {
            /* Menu Open/Close Timeline */
            timeline.current = gsap.timeline({
                defaults: {duration: 0.04}
            })
            .addLabel("start", 0)
            .fromTo(buttonRef.current, {
                "--button-before-y": "50%",
                "--button-before-rotation": "45deg",
                "--button-after-y": "50%",
                "--button-after-rotation": "-45deg",
                "--button-scale": 0,
                "--button-shadow-spread": "20px",
                "--button-shadow-inner-spread": "9px",
                "--button-shadow-color": "rgba(52, 84, 209, 0.5)"
            },{
                "--button-before-y": "50%",
                "--button-before-rotation": "45deg",
                "--button-after-y": "50%",
                "--button-after-rotation": "-45deg",
                "--button-scale": 1,
                "--button-shadow-spread": "1200px",
                "--button-shadow-inner-spread": "20px",
                "--button-shadow-color": "rgba(0, 0, 0, 0.9)"
            }, "start")
            .fromTo(".navItem", {
                "--nav-item-scale": 0.2,
                immediateRender: false
            }, {
                "--nav-item-scale": 1,
                duration: 0.2,
                ease: "back.out(4.5)"
            }, "start") //, "start+=0.1"
            .fromTo([testimonialsRef.current, contactRef.current], {
                "--nav-item-opacity": 0
            }, {
                "--nav-item-opacity": 1,
                duration: 0.4
            }, "start")
            .progress(0).pause();

            /* Sticky Toggle Trigger */

            const setFixed = () => gsap.set([navRef.current, buttonRef.current], {
                position: 'fixed'
            });
        
            const setAbsolute = () => gsap.set([navRef.current, buttonRef.current], {
                position: 'absolute'
            });

            ScrollTrigger.create({
                trigger: document.querySelector('#about'),
                start: "top top",
                end: 99999,
                onEnter: () => setFixed(),
                onLeaveBack: () => setAbsolute()
            })
        }, scopeRef);

        return () => ctx.revert();
    }, [])

    useEffect(() => {
        if (isOpen && !timeline.current.isActive()) {
            timeline.current.timeScale(1).play();
        } else if (!isOpen && timeline.current.progress() === 1) {
            timeline.current.timeScale(2).reverse(0);
        }
    }, [isOpen])

    

    return (
        <div ref={scopeRef}>
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
        </div>
    )
}

export default MobileNavigation;